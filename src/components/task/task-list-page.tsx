import * as React from 'react';
import { FC, useContext, useState, useEffect } from 'react';
import {
  Task,
  FilterRule,
  TaskPageRequest,
  TaskCountsResponse,
  TaskFilters,
  TaskSelectorCounts,
  TaskStatusCounts,
} from '../../adapters/task/task';
import { StubTargetingApiClient } from '../../adapters/task/targeting-api-client';
import { TaskStatus } from '../../adapters/task/task-status';
import Layout from '../layout/layout';
import TaskList from './task-list';
import TriggerRequestPnrAccess from './trigger-request-pnr-access';
import AuthContext from '../../contexts/auth/auth-context';
import PnrAccessContext from '../../contexts/pnr/pnr-access-context';
import { FormFilters } from './form-filters';
import { TaskFilterComponent } from './task-filters';

import '../../styles/task-list-page.scss';

class Props {
  headerText: string;
  defaultFormFilters: FormFilters;
  taskFilterForm: any;
  populateFormCounts: (form: any, counts: TaskCountsResponse) => any;
  pnrAccessCheckEnabled: boolean;
  toTaskCard: (task: Task) => React.ReactNode;
}

const TaskListPage: FC<Props> = ({
  headerText,
  defaultFormFilters,
  taskFilterForm,
  populateFormCounts,
  pnrAccessCheckEnabled,
  toTaskCard,
}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.New);
  const [isLoading, setLoading] = useState<boolean>(true);

  const [formFilters, setFormFilters] =
    useState<FormFilters>(defaultFormFilters);

  const defaultTaskCounts: TaskCountsResponse = {
    filters: {
      movementModes: formFilters.movementModes,
      statuses: [status],
      selectors: formFilters.selectors,
      rules: formFilters.rules,
      searchText: formFilters.searchText,
      movementDirections: formFilters.movementDirections,
    },
    movementModeCounts: {
      roRoAccompaniedFreight: 0,
      roRoUnaccompaniedFreight: 0,
      roRoTourist: 0,
      airPassenger: 0,
    },
    taskStatusCounts: {
      new: 0,
      inProgress: 0,
      issued: 0,
      complete: 0,
    },
    taskSelectorCounts: {
      hasSelector: 0,
      hasNoSelector: 0,
      both: 0,
    },
    movementDirectionCounts: {
      inbound: 0,
      outbound: 0,
      unknown: 0,
    },
  };
  const [taskCounts, setTaskCounts] =
    useState<TaskCountsResponse>(defaultTaskCounts);

  const handleApplyFilters = async (formFilters: FormFilters) => {
    console.log(`form filters applied ${JSON.stringify(formFilters)}`);
    setFormFilters(formFilters);
    setPageNumber(1);
  };

  const handleResetFilters = (formFilters: FormFilters) => {
    console.log(`form filters reset ${JSON.stringify(formFilters)}`);
    setFormFilters(formFilters);
    setPageNumber(1);
  };

  const handleStatusSelected = (status: TaskStatus) => {
    console.log(`status selected ${status}`);
    setStatus(status);
    setPageNumber(1);
  };

  const { getSessionId } = useContext(AuthContext);
  const { isPnrAccessRequested } = useContext(PnrAccessContext);
  const { getToken } = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>();
  const [totalNumberOfTasks, setTotalNumberOfTasks] = useState<number>();
  const [filterRuleOptions, setFilterRuleOptions] = useState<FilterRule[]>();

  const taskClient = new StubTargetingApiClient(getToken);

  const toTotalNumberOfTasks = (statusCounts: TaskStatusCounts): number => {
    switch (status) {
      case TaskStatus.New:
        return statusCounts.new;
      case TaskStatus.InProgress:
        return statusCounts.inProgress;
      case TaskStatus.Issued:
        return statusCounts.issued;
      case TaskStatus.Complete:
        return statusCounts.complete;
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
      filters: buildTaskFiltersRequest(),
      pagination: {
        offset: pageOffset,
        limit: pageSize,
      },
    };
  };

  const buildTaskFiltersRequest = (): TaskFilters => {
    return {
      movementModes: formFilters.movementModes,
      statuses: [status],
      selectors: formFilters.selectors,
      rules: formFilters.rules,
      searchText: formFilters.searchText,
      movementDirections: formFilters.movementDirections,
    };
  };

  const handlePageChanged = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  const fetchFilterRuleOptions = async () => {
    const rules = await taskClient.getFilterRules();
    setFilterRuleOptions(rules);
  };

  const fetchTasks = async () => {
    setLoading(true);
    const taskFiltersRequest = buildTaskFiltersRequest();
    const countsResponse = await taskClient.getTaskCounts(taskFiltersRequest);
    setTaskCounts(countsResponse);

    const totalNumberOfTasks = toTotalNumberOfTasks(
      countsResponse.taskStatusCounts,
    );
    setTotalNumberOfTasks(totalNumberOfTasks);

    const pageOffset = calculatePageOffset(totalNumberOfTasks);
    const pageRequest = buildTaskPageRequest(pageOffset);
    const pageResponse = await taskClient.getTaskPage(pageRequest);
    setTasks(pageResponse.tasks);
    setLoading(false);
  };

  const filterComponent = (
    <TaskFilterComponent
      form={populateFormCounts(taskFilterForm, taskCounts)}
      defaultFilters={defaultFormFilters}
      ruleOptions={filterRuleOptions}
      onApplyFilters={handleApplyFilters}
      onResetFilters={handleResetFilters}
    />
  );

  const getComponentToShow = () => {
    if (!pnrAccessCheckEnabled || isPnrAccessRequested(getSessionId())) {
      return (
        <TaskList
          headerText={headerText}
          isLoading={isLoading}
          taskCounts={taskCounts}
          pageSize={pageSize}
          currentPage={pageNumber}
          currentStatus={status}
          totalNumberOfTasks={totalNumberOfTasks}
          tasks={tasks}
          filterComponent={filterComponent}
          onPageChanged={handlePageChanged}
          onStatusSelected={handleStatusSelected}
          toTaskCard={toTaskCard}
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
  }, [pageNumber, status, formFilters]);

  return <Layout>{getComponentToShow()}</Layout>;
};

export default TaskListPage;
