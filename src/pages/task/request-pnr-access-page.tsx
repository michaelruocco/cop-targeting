import * as React from 'react';
import { FC } from 'react';
import Layout from '../../components/layout/layout';
import RequestPnrAccess from '../../components/task/request-pnr-access';

const RequestPnrAccessPage: FC = () => {
  return (
    <Layout>
      <RequestPnrAccess />
    </Layout>
  );
};

export default RequestPnrAccessPage;
