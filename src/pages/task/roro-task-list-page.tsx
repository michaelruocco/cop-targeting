import * as React from 'react';
import { FC } from 'react';
import Layout from '../../components/layout/layout';
import RoRoTaskList from '../../components/task/roro-task-list';

const RoRoTaskListPage: FC = () => {
  return (
    <Layout>
      <RoRoTaskList />
    </Layout>
  );
};

export default RoRoTaskListPage;
