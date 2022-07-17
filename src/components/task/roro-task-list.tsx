import * as React from 'react';
import { FC } from 'react';
import TaskHeading from './task-heading';

const RoRoTaskList: FC = () => {
  return (
    <>
      <TaskHeading text="RoRo Tasks" />
      <p>RoRo task list will go here</p>
    </>
  );
};

export default RoRoTaskList;
