import * as React from 'react';
import { FC } from 'react';
import TaskHeader from './task-header';
import AirPaxTaskListCard from './air-pax-task-list-card';
import {
  Task,
  TaskCountsResponse,
  TaskSelectorStatusCounts,
  FilterRule,
} from '../../adapters/task/task';
import { formatTaskStatus, TaskStatus } from '../../adapters/task/task-status';
import Pagination from '../pagination/pagination';
import { AirPaxFilters } from './air-pax-filters';
import { FormFilters } from './form-filters';
import StatusTabs from '../tabs/status-tabs';
import LoadingSpinner from '../spinner/loading-spinner';

class Props {
  isLoading: boolean;
  taskCounts: TaskCountsResponse;
  taskSelectorStatusCounts: TaskSelectorStatusCounts;
  currentPage: number;
  currentStatus: TaskStatus;
  pageSize: number;
  totalNumberOfTasks: number;
  tasks: Task[];
  ruleOptions: FilterRule[];
  defaultFilters: FormFilters;
  onApplyFilters: (filters: FormFilters) => void;
  onResetFilters: (filters: FormFilters) => void;
  onPageChanged: (pageNumber: number) => void;
  onStatusSelected: (status: TaskStatus) => void;
  onTaskClaimed: (task: Task) => void;
  onTaskUnclaimed: (task: Task) => void;
  onTaskViewed: (task: Task) => void;
}

const AirPaxTaskList: FC<Props> = ({
  isLoading = true,
  taskCounts,
  taskSelectorStatusCounts,
  currentPage,
  currentStatus,
  pageSize,
  totalNumberOfTasks,
  tasks,
  ruleOptions,
  defaultFilters,
  onApplyFilters,
  onResetFilters,
  onPageChanged,
  onStatusSelected,
  onTaskClaimed,
  onTaskUnclaimed,
  onTaskViewed,
}) => {
  const toTaskItems = (tasks: Task[]): React.ReactNode | React.ReactNode[] => {
    if (!tasks || tasks.length < 1) {
      return (
        <p className="govuk-body-l">
          There are no {formatTaskStatus(currentStatus).toLowerCase()} tasks
        </p>
      );
    }
    return tasks.map((task) => (
      <AirPaxTaskListCard
        task={task}
        key={task.id}
        onTaskClaimed={onTaskClaimed}
        onTaskUnclaimed={onTaskUnclaimed}
        onTaskViewed={onTaskViewed}
      />
    ));
  };

  const getTaskPanelContents = (): React.ReactNode => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    return (
      <>
        <Pagination
          currentPage={currentPage}
          totalNumberOfItems={totalNumberOfTasks}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
        />
        <div>{toTaskItems(tasks)}</div>
        <Pagination
          currentPage={currentPage}
          totalNumberOfItems={totalNumberOfTasks}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
        />
      </>
    );
  };

  return (
    <>
      <TaskHeader text="Air Passenger Tasks" />
      <div className="govuk-grid-row">
        <section className="govuk-grid-column-one-quarter">
          <AirPaxFilters
            defaultFilters={defaultFilters}
            ruleOptions={ruleOptions}
            taskSelectorStatusCounts={taskSelectorStatusCounts}
            onApplyFilters={onApplyFilters}
            onResetFilters={onResetFilters}
          />
        </section>
        <section className="govuk-grid-column-three-quarters">
          <div id="tasksTabs" className="govuk-tabs">
            <StatusTabs
              taskCounts={taskCounts}
              currentStatus={currentStatus}
              onStatusSelected={onStatusSelected}
            />
            <div id="taskPanel" className="govuk-tabs__panel">
              {getTaskPanelContents()}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AirPaxTaskList;
