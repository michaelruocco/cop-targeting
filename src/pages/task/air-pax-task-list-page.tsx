import * as React from 'react';
import { FC, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  StubTargetingApiClient,
  Task,
  HasSelectors,
  MovementMode,
  FilterRule,
  TaskPageRequest,
  TaskStatus,
  TaskCountsRequest,
  TaskCountsResponse,
} from '../../adapters/task/targeting-api-client';
import Layout from '../../components/layout/layout';
import AirPaxTaskList from '../../components/task/air-pax-task-list';
import TriggerRequestPnrAccess from '../../components/task/trigger-request-pnr-access';
import AuthContext from '../../contexts/auth/auth-context';
import PnrAccessContext from '../../contexts/pnr/pnr-access-context';
import { FormFilters } from '../../components/task/form-filters';

import '../../styles/task-list-page.scss';

const AirPaxTaskListPage: FC = () => {
  const [searchParams, _] = useSearchParams();
  const paramPageNumber = searchParams.get('page')
    ? parseInt(searchParams.get('page'))
    : 1;
  const [pageNumber, setPageNumber] = useState<number>(paramPageNumber);
  //set page number if back link has been used
  if (paramPageNumber !== pageNumber) {
    setPageNumber(paramPageNumber);
  }

  const defaultFormFilters: FormFilters = {
    movementModes: [MovementMode.AirPassenger],
    selectors: HasSelectors.Any,
    rules: [],
    searchText: '',
  };

  const [formFilters, setFormFilters] = useState(defaultFormFilters);
  const [status, setStatus] = useState(TaskStatus.New);

  const defaultTaskCounts: TaskCountsResponse = {
    request: {
      movementModes: formFilters.movementModes,
      statuses: [status],
    },
    new: 0,
    inProgress: 0,
    issued: 0,
    complete: 0,
  };

  const [taskCounts, setTaskCounts] =
    useState<TaskCountsResponse>(defaultTaskCounts);

  const handleApplyFilters = async (formFilters: FormFilters) => {
    console.log(`form filters applied ${JSON.stringify(formFilters)}`);
    setFormFilters(formFilters);
  };

  const handleResetFilters = (formFilters: FormFilters) => {
    console.log(`form filters reset ${JSON.stringify(formFilters)}`);
    setFormFilters(formFilters);
  };

  const handleTabSelected = () => {
    // TODO status should be passed and used for update when status selected
    setStatus(TaskStatus.InProgress);
  };

  const handleTaskClaimed = (taskId: string) => {
    console.log(`task claimed ${taskId}`);
  };

  const { getSessionId } = useContext(AuthContext);
  const { isPnrAccessRequested } = useContext(PnrAccessContext);
  const { getToken } = useContext(AuthContext);

  const [tasks, setTasks] = useState<Task[]>();

  const [totalNumberOfTasks, setTotalNumberOfTasks] = useState<number>();

  const [filterRuleOptions, setFilterRuleOptions] = useState<FilterRule[]>();

  const taskClient = new StubTargetingApiClient(getToken);

  const buildTaskCountsRequest = (): TaskCountsRequest => {
    return {
      movementModes: formFilters.movementModes,
      statuses: [status],
    };
  };

  const toTotalNumberOfTasks = (taskCounts: TaskCountsResponse): number => {
    switch (status) {
      case TaskStatus.New:
        return taskCounts.new;
      case TaskStatus.InProgress:
        return taskCounts.inProgress;
      case TaskStatus.Issued:
        return taskCounts.issued;
      case TaskStatus.Complete:
        return taskCounts.complete;
      default:
        return 0;
    }
  };

  const pageSize = 2;

  const calculatePageOffset = (totalNumberOfTasks: number): number => {
    if (pageNumber <= 1) {
      return 0;
    }
    const offset = (pageNumber - 1) * pageSize;
    return Math.min(offset, totalNumberOfTasks);
  };

  const buildTaskPageRequest = (pageOffset: number): TaskPageRequest => {
    return {
      filters: {
        movementModes: formFilters.movementModes,
        statuses: [status],
        selectors: formFilters.selectors,
        rules: formFilters.rules,
        searchText: formFilters.searchText,
      },
      pagination: {
        offset: pageOffset,
        limit: pageSize,
      },
    };
  };

  const handlePageChanged = (pageNumber: number) => {
    setPageNumber(pageNumber);
    //console.log(`loading page ${pageNumber}`);
    //loadTaskPage(buildTaskPageRequest());
  };

  const fetchFilterRuleOptions = async () => {
    const rules = await taskClient.getFilterRules();
    setFilterRuleOptions(rules);
  };

  const fetchTasks = async () => {
    const countsRequest = buildTaskCountsRequest();
    const countsResponse = await taskClient.getTaskCounts(countsRequest);
    setTaskCounts(countsResponse);

    const totalNumberOfTasks = toTotalNumberOfTasks(countsResponse);
    setTotalNumberOfTasks(totalNumberOfTasks);

    const pageOffset = calculatePageOffset(totalNumberOfTasks);
    const pageRequest = buildTaskPageRequest(pageOffset);
    const pageResponse = await taskClient.getTaskPage(pageRequest);
    setTasks(pageResponse.tasks);
  };

  const getComponentToShow = () => {
    if (isPnrAccessRequested(getSessionId())) {
      return (
        <AirPaxTaskList
          taskCounts={taskCounts}
          pageSize={pageSize}
          currentPage={pageNumber}
          totalNumberOfTasks={totalNumberOfTasks}
          tasks={tasks}
          ruleOptions={filterRuleOptions}
          defaultFilters={defaultFormFilters}
          onApplyFilters={handleApplyFilters}
          onResetFilters={handleResetFilters}
          onPageChanged={handlePageChanged}
          onTaskClaimed={handleTaskClaimed}
        />
      );
    }
    return <TriggerRequestPnrAccess />;
  };

  useEffect(() => {
    fetchFilterRuleOptions().catch(console.error);
  }, []);

  useEffect(() => {
    fetchTasks().catch(console.error);
  }, [pageNumber]);

  return <Layout>{getComponentToShow()}</Layout>;
};

export default AirPaxTaskListPage;
