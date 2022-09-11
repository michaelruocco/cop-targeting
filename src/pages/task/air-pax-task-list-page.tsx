import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import {
  Task,
  HasSelectors,
  MovementMode,
  TaskSelectorStatusCounts,
} from '../../adapters/task/task';
import { FormFilters } from '../../components/task/form-filters';
import AirPaxTaskListCard from '../../components/task/air-pax-task-list-card';
import {
  airPaxTaskFilterForm,
  populateTaskStatusCounts,
} from './task-filter-form';

import '../../styles/task-list-page.scss';
import TaskListPage from '../../components/task/task-list-page';

const AirPaxTaskListPage: FC = () => {
  const defaultFormFilters: FormFilters = {
    movementModes: [MovementMode.AirPassenger],
    selectors: HasSelectors.Any,
    rules: [],
    searchText: '',
  };

  const taskFilterForm = airPaxTaskFilterForm();

  const handleTaskClaimed = (task: Task) => {
    console.log(`air pax task claimed ${task.id}`);
  };

  const handleTaskUnclaimed = (task: Task) => {
    console.log(`air pax task unclaimed ${task.id}`);
  };

  const handleTaskViewed = (task: Task) => {
    console.log(`air pax task viewed ${task.id}`);
  };

  const toTaskCard = (task: Task): React.ReactNode => {
    return (
      <AirPaxTaskListCard
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
      headerText="Air Passenger Tasks"
      defaultFormFilters={defaultFormFilters}
      taskFilterForm={taskFilterForm}
      populateFormStatusCounts={populateTaskStatusCounts}
      pnrAccessCheckEnabled={true}
      toTaskCard={toTaskCard}
    />
  );
};

export default AirPaxTaskListPage;
