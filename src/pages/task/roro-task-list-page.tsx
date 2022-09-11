import * as React from 'react';
import { FC } from 'react';
import { Task, HasSelectors, MovementMode } from '../../adapters/task/task';
import { FormFilters } from '../../components/task/form-filters';
import {
  roroTaskFilterForm,
  populateTaskStatusCounts,
} from './task-filter-form';

import '../../styles/task-list-page.scss';
import TaskListPage from '../../components/task/task-list-page';

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
    //create RORO task list card and use here
    return <div>{task.id}</div>;
  };

  return (
    <TaskListPage
      headerText="RORO Tasks"
      defaultFormFilters={defaultFormFilters}
      taskFilterForm={taskFilterForm}
      populateFormStatusCounts={populateTaskStatusCounts}
      pnrAccessCheckEnabled={false}
      toTaskCard={toTaskCard}
    />
  );
};
export default RoRoTaskListPage;
