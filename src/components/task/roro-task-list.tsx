import * as React from 'react';
import { FC } from 'react';
import TaskHeader from './task-header';

const RoRoTaskList: FC = () => {
  return (
    <>
      <TaskHeader text="RoRo Tasks" />
      <p>RoRo task list will go here</p>
    </>
  );
};

export default RoRoTaskList;
