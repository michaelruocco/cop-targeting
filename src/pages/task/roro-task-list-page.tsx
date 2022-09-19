import * as React from 'react';
import { FC } from 'react';
import {
  Task,
  HasSelectors,
  MovementMode,
  MovementDirection,
} from '../../adapters/task/task';
import { FormFilters } from '../../components/task/form-filters';
import { roroTaskFilterForm, populateFormTaskCounts } from './task-filter-form';
import '../../styles/task-list-page.scss';
import TaskListPage from '../../components/task/task-list-page';
import RoRoTaskListCard from '../../components/task/roro-task-list-card';

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

  const handleTaskClaimed = (task: Task) => {
    console.log(`roro task claimed ${task.id}`);
  };

  const handleTaskUnclaimed = (task: Task) => {
    console.log(`roro task unclaimed ${task.id}`);
  };

  const handleTaskViewed = (task: Task) => {
    console.log(`roro task viewed ${task.id}`);
  };

  const toTaskCard = (task: Task): React.ReactNode => {
    return (
      <RoRoTaskListCard
        task={task}
        key={task.id}
        onTaskClaimed={handleTaskClaimed}
        onTaskUnclaimed={handleTaskUnclaimed}
        onTaskViewed={handleTaskViewed}
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
