import * as React from 'react';
import { FC } from 'react';
import TaskHeader from './task-header';
import AirPaxTaskListItem from './air-pax-task-list-item';
import {
  Task,
  TaskCountsResponse,
  TaskStatus,
} from '../../adapters/task/targeting-api-client';
import Pagination from '../pagination/pagination';
import { AirPaxFilters } from './air-pax-filters';
import { FormFilters } from './form-filters';
import { FilterRule } from '../../adapters/task/targeting-api-client';
import StatusTabs from '../tabs/status-tabs';

class Props {
  taskCounts: TaskCountsResponse;
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
  onTaskClaimed: (taskId: string) => void;
  onStatusSelected: (status: TaskStatus) => void;
}

const AirPaxTaskList: FC<Props> = ({
  taskCounts,
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
  onTaskClaimed,
  onStatusSelected,
}) => {
  const taskItems =
    tasks &&
    tasks.map((task) => (
      <AirPaxTaskListItem
        task={task}
        key={task.id}
        onTaskClaimed={onTaskClaimed}
      />
    ));

  return (
    <>
      <TaskHeader text="Air Passenger Tasks" />
      <div className="govuk-grid-row">
        <section className="govuk-grid-column-one-quarter">
          <AirPaxFilters
            defaultFilters={defaultFilters}
            ruleOptions={ruleOptions}
            onApplyFilters={onApplyFilters}
            onResetFilters={onResetFilters}
          />
        </section>
        <section className="govuk-grid-column-three-quarters">
          <div id="tasks" className="govuk-tabs">
            <StatusTabs
              taskCounts={taskCounts}
              currentStatus={currentStatus}
              onStatusSelected={onStatusSelected}
            />
            <div id="new" className="govuk-tabs__panel">
              <Pagination
                currentPage={currentPage}
                totalNumberOfItems={totalNumberOfTasks}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
              />
              <div>{taskItems}</div>
              <Pagination
                currentPage={currentPage}
                totalNumberOfItems={totalNumberOfTasks}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AirPaxTaskList;
