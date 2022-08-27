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

const pageSize = 5;

const AirPaxTaskListPage: FC = () => {
  const defaultFormFilters: FormFilters = {
    movementModes: [MovementMode.AirPassenger],
    selectors: HasSelectors.Any,
    rules: [],
    searchText: '',
  };
  const [formFilters, setFormFilters] = useState(defaultFormFilters);
  const [status, setStatus] = useState(TaskStatus.New);

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

  const calculatePageOffset = (
    pageNumber: number,
    totalNumberOfItems: number,
  ): number => {
    if (pageNumber <= 1) {
      return 0;
    }
    const offset = (pageNumber - 1) * pageSize;
    console.log(`pageNumber ${pageNumber} offset ${offset}`);
    return Math.min(offset, totalNumberOfItems);
  };

  const getPageNumber = (): number => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');
    if (page) {
      return parseInt(page);
    }
    return 1;
  };

  const { getSessionId } = useContext(AuthContext);
  const { isPnrAccessRequested } = useContext(PnrAccessContext);
  const { getToken } = useContext(AuthContext);

  const [tasks, setTasks] = useState<Task[]>();
  const [taskCounts, setTaskCounts] = useState<TaskCountsResponse>();
  const [totalNumberOfTasks, setTotalNumberOfTasks] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(getPageNumber());
  const [filterRuleOptions, setFilterRuleOptions] = useState<FilterRule[]>();

  const taskClient = new StubTargetingApiClient(getToken);

  const buildTaskCountsRequest = (): TaskCountsRequest => {
    return {
      movementModes: formFilters.movementModes,
      statuses: [status],
    };
  };

  const buildTaskPageRequest = (pageNumber: number): TaskPageRequest => {
    return {
      filters: {
        movementModes: formFilters.movementModes,
        statuses: [status],
        selectors: formFilters.selectors,
        rules: formFilters.rules,
        searchText: formFilters.searchText,
      },
      pagination: {
        offset: calculatePageOffset(pageNumber, totalNumberOfTasks),
        limit: pageSize,
      },
    };
  };

  const handlePageChanged = (pageNumber: number) => {
    setPageNumber(pageNumber);
    console.log(`loading page ${pageNumber}`);
    loadTaskPage(buildTaskPageRequest(pageNumber));
  };

  const loadTaskCounts = async (request: TaskCountsRequest) => {
    const response = await taskClient.getTaskCounts(request);
    setTaskCounts(response);
  };

  const loadTaskPage = async (request: TaskPageRequest) => {
    const response = await taskClient.getTaskPage(request);
    setTasks(response.tasks);
    setTotalNumberOfTasks(response.totalNumberOfTasks);
  };

  const loadFilterRules = async () => {
    const rules = await taskClient.getFilterRules();
    setFilterRuleOptions(rules);
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
        />
      );
    }
    return <TriggerRequestPnrAccess />;
  };

  useEffect(() => {
    loadFilterRules();
  }, []);

  const countsRequest = buildTaskCountsRequest();
  useEffect(() => {
    loadTaskCounts(countsRequest);
  }, []);

  const pageRequest = buildTaskPageRequest(pageNumber);
  useEffect(() => {
    loadTaskPage(pageRequest);
  }, []);

  return <Layout>{getComponentToShow()}</Layout>;
};

export default AirPaxTaskListPage;
