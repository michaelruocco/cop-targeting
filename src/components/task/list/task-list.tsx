import * as React from 'react';
import { FC } from 'react';
import TaskListHeader from './task-list-header';

import { Task, TaskCountsResponse } from '../../../adapters/task/task';
import {
  formatTaskStatus,
  TaskStatus,
} from '../../../adapters/task/task-status';
import Pagination from '../../pagination/pagination';
import StatusTabs from '../../tab/status-tabs';
import LoadingSpinner from '../../spinner/loading-spinner';

class Props {
  headerText: string;
  isLoading: boolean;
  taskCounts: TaskCountsResponse;
  currentPage: number;
  currentStatus: TaskStatus;
  pageSize: number;
  totalNumberOfTasks: number;
  tasks: Task[];
  filterComponent: React.ReactNode;
  onPageChanged: (pageNumber: number) => void;
  onStatusSelected: (status: TaskStatus) => void;
  toTaskCard: (
    task: Task,
    onTaskUnclaimed: (task: Task) => void,
  ) => React.ReactNode;
  handleTaskUnclaimed: (task: Task) => void;
}

const TaskList: FC<Props> = ({
  headerText,
  isLoading = true,
  taskCounts,
  currentPage,
  currentStatus,
  pageSize,
  totalNumberOfTasks,
  tasks,
  filterComponent,
  onPageChanged,
  onStatusSelected,
  toTaskCard,
  handleTaskUnclaimed,
}) => {
  const toTaskCardContent = (
    tasks: Task[],
  ): React.ReactNode | React.ReactNode[] => {
    if (!tasks || tasks.length < 1) {
      return (
        <p className="govuk-body-l">
          There are no {formatTaskStatus(currentStatus).toLowerCase()} tasks
        </p>
      );
    }
    return tasks.map((task) => toTaskCard(task, handleTaskUnclaimed));
  };

  const getTaskPanelContent = (): React.ReactNode => {
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
        <div>{toTaskCardContent(tasks)}</div>
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
      <TaskListHeader text={headerText} />
      <div className="govuk-grid-row">
        <section className="govuk-grid-column-one-quarter">
          {filterComponent}
        </section>
        <section className="govuk-grid-column-three-quarters">
          <div id="tasksTabs" className="govuk-tabs">
            <StatusTabs
              taskCounts={taskCounts}
              currentStatus={currentStatus}
              onStatusSelected={onStatusSelected}
            />
            <div id="taskPanel" className="govuk-tabs__panel">
              {getTaskPanelContent()}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TaskList;
