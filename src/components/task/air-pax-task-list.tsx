import * as React from 'react';
import { FC } from 'react';
import TaskHeader from './task-header';
import AirPaxTaskListItem from './air-pax-task-list-item';
import {
  Task,
  TaskCountsResponse,
} from '../../adapters/task/targeting-api-client';
import Pagination from '../../pages/task/pagination';
import { AirPaxFilters } from './air-pax-filters';
import { FormFilters } from './form-filters';
import { FilterRule } from '../../adapters/task/targeting-api-client';

class Props {
  taskCounts: TaskCountsResponse;
  currentPage: number;
  pageSize: number;
  totalNumberOfTasks: number;
  tasks: Task[];
  ruleOptions: FilterRule[];
  defaultFilters: FormFilters;
  onApplyFilters: (filters: FormFilters) => void;
  onResetFilters: (filters: FormFilters) => void;
  onPageChanged: (pageNumber: number) => void;
  onTaskClaimed: (taskId: string) => void;
}

const AirPaxTaskList: FC<Props> = ({
  taskCounts,
  currentPage,
  pageSize,
  totalNumberOfTasks,
  tasks,
  ruleOptions,
  defaultFilters,
  onApplyFilters,
  onResetFilters,
  onPageChanged,
  onTaskClaimed,
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
            <div>
              <ul className="govuk-tabs__list">
                <li className="govuk-tabs__list-item govuk-tabs__list-item--selected">
                  <a className="govuk-tabs__tab" href="#new">
                    New ({taskCounts.new})
                  </a>
                </li>
                <li className="govuk-tabs__list-item">
                  <a className="govuk-tabs__tab" href="#inProgress">
                    In progress ({taskCounts.inProgress})
                  </a>
                </li>
                <li className="govuk-tabs__list-item">
                  <a className="govuk-tabs__tab" href="#issued">
                    Issued ({taskCounts.issued})
                  </a>
                </li>
                <li className="govuk-tabs__list-item">
                  <a className="govuk-tabs__tab" href="#complete">
                    Complete ({taskCounts.complete})
                  </a>
                </li>
              </ul>
            </div>
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
