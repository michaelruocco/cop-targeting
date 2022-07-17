import * as React from 'react';
import { FC } from 'react';
import Layout from '../../components/layout/layout';
import AirPaxTaskList from '../../components/task/air-pax-task-list';

const AirPaxTaskListPage: FC = () => {
  return (
    <Layout>
      <AirPaxTaskList />
    </Layout>
  );
};

export default AirPaxTaskListPage;
