import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  PNR_ACCESS_URL,
  TASK_DETAIL_URL,
  AIR_PASSENGER_TASK_LIST_URL,
  RORO_TASK_LIST_URL,
  DEFAULT_LIST_PAGE_URL,
} from './adapters/links/links';
import { PnrAccessProvider } from './contexts/pnr/pnr-access-provider';
import AirPaxTaskListPage from './pages/task/air-pax-task-list-page';
import RequestPnrAccessPage from './pages/task/request-pnr-access-page';
import RoRoTaskListPage from './pages/task/roro-task-list-page';
import TaskDetailPage from './pages/task/task-detail-page';

const AppRouter: FC = () => {
  document.body.className = document.body.className
    ? `${document.body.className} js-enabled`
    : 'js-enabled';
  return (
    <BrowserRouter>
      <PnrAccessProvider>
        <Routes>
          <Route
            path={DEFAULT_LIST_PAGE_URL}
            element={<Navigate to={RORO_TASK_LIST_URL} />}
          />
          <Route path={RORO_TASK_LIST_URL} element={<RoRoTaskListPage />} />
          <Route
            path={AIR_PASSENGER_TASK_LIST_URL}
            element={<AirPaxTaskListPage />}
          />
          <Route path={PNR_ACCESS_URL} element={<RequestPnrAccessPage />} />
          <Route path={TASK_DETAIL_URL} element={<TaskDetailPage />} />
        </Routes>
      </PnrAccessProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
