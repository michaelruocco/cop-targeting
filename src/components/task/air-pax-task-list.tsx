import * as React from 'react';
import { FC, useContext, useEffect } from 'react';
import TaskHeading from './task-heading';
import AuthContext from '../../contexts/auth/auth-context';

const AirPaxTaskList: FC = () => {
  const { getToken } = useContext(AuthContext);

  const token = getToken();

  useEffect(() => {
    console.log(`auth token ${token}`);
  });

  return (
    <>
      <TaskHeading text="Air Passenger Tasks" />
      <p>Air passenger task list will go here</p>
    </>
  );
};

export default AirPaxTaskList;
