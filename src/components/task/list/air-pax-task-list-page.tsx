import * as React from 'react';
import { FC } from 'react';
import {
  Task,
  HasSelectors,
  MovementMode,
  MovementDirection,
} from '../../../adapters/task/task';
import { FormFilters } from './form-filters';
import AirPaxTaskListCard from './air-pax-task-list-card';
import {
  airPaxTaskFilterForm,
  populateFormTaskCounts,
} from './task-filter-form';
import TaskListPage from './task-list-page';

const AirPaxTaskListPage: FC = () => {
  const defaultFormFilters: FormFilters = {
    movementModes: [MovementMode.AirPassenger],
    selectors: HasSelectors.Any,
    rules: [],
    searchText: '',
    movementDirections: [
      MovementDirection.Inbound,
      MovementDirection.Outbound,
      MovementDirection.Unknown,
    ],
  };

  const taskFilterForm = airPaxTaskFilterForm();

  const toTaskCard = (
    task: Task,
    handleTaskUnclaimed: (task: Task) => void,
  ): React.ReactNode => {
    return (
      <AirPaxTaskListCard
        task={task}
        key={task.id}
        onTaskUnclaimed={handleTaskUnclaimed}
      />
    );
  };

  return (
    <TaskListPage
      headerText="Air Passenger Tasks"
      defaultFormFilters={defaultFormFilters}
      taskFilterForm={taskFilterForm}
      populateFormCounts={populateFormTaskCounts}
      pnrAccessCheckEnabled={true}
      toTaskCard={toTaskCard}
    />
  );
};

export default AirPaxTaskListPage;
