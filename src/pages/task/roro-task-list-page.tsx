import * as React from 'react';
import { FC, useContext } from 'react';
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
import AuthContext from '../../contexts/auth/auth-context';
import { getClient } from '../../adapters/task/targeting-api-client';

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
  const { getToken } = useContext(AuthContext);
  const taskClient = getClient(getToken);

  const handleTaskClaimed = (task: Task) => {
    taskClient.claimTask(task.id);
    console.log(`roro task claimed ${task.id}`);
  };

  const handleTaskUnclaimed = (task: Task) => {
    taskClient.unclaimTask(task.id);
    console.log(`roro task unclaimed ${task.id}`);
  };

  const handleTaskViewed = (task: Task) => {
    console.log(`roro task viewed ${JSON.stringify(task)}`);
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
