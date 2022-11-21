import * as React from 'react';
import { FC } from 'react';
import Layout from '../layout/layout';
import RequestPnrAccess from './request-pnr-access';

const RequestPnrAccessPage: FC = () => {
  return (
    <Layout>
      <RequestPnrAccess />
    </Layout>
  );
};

export default RequestPnrAccessPage;
