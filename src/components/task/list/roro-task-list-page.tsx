import * as React from 'react';
import { FC } from 'react';
import {
  Task,
  HasSelectors,
  MovementMode,
  MovementDirection,
} from '../../../adapters/task/task';
import { FormFilters } from './form-filters';
import { roroTaskFilterForm, populateFormTaskCounts } from './task-filter-form';
import TaskListPage from './task-list-page';
import RoRoTaskListCard from './card/roro-task-list-card';

const RoRoTaskListPage: FC = () => {
  const defaultFormFilters: FormFilters = {
    movementModes: [
      MovementMode.RoRoAccompaniedFreight,
      MovementMode.RoRoUnaccompaniedFreight,
      MovementMode.RoRoTourist,
    ],
    selectors: HasSelectors.Any,
    rules: [],
    searchText: '',
    movementDirections: [
      MovementDirection.Inbound,
      MovementDirection.Outbound,
      MovementDirection.Unknown,
    ],
  };

  const taskFilterForm = roroTaskFilterForm();

  const toTaskCard = (
    task: Task,
    handleTaskUnclaimed: (task: Task) => void,
  ): React.ReactNode => {
    return (
      <RoRoTaskListCard
        task={task}
        key={task.id}
        onTaskUnclaimed={handleTaskUnclaimed}
      />
    );
  };

  return (
    <TaskListPage
      headerText="RORO Tasks"
      defaultFormFilters={defaultFormFilters}
      taskFilterForm={taskFilterForm}
      populateFormCounts={populateFormTaskCounts}
      pnrAccessCheckEnabled={false}
      toTaskCard={toTaskCard}
    />
  );
};
export default RoRoTaskListPage;
