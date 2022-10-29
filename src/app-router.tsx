import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MovementMode } from './adapters/task/task';
import { PnrAccessProvider } from './contexts/pnr/pnr-access-provider';
import AirPaxTaskListPage from './components/task/list/air-pax-task-list-page';
import RequestPnrAccessPage from './components/pnr/request-pnr-access-page';
import RoRoTaskListPage from './components/task/list/roro-task-list-page';
import TaskDetailPage from './components/task/detail/task-detail-page';

export const PNR_ACCESS_URL = '/pnr-access';
export const AIR_PASSENGER_TASK_LIST_URL = '/air-passenger/tasks';
export const RORO_TASK_LIST_URL = '/roro/tasks';

const TASK_DETAIL_URL = '/task/:taskId';
const DEFAULT_LIST_PAGE_URL = '/';

export const toTaskListLink = (mode: MovementMode): string => {
  switch (mode) {
    case MovementMode.AirPassenger:
      return AIR_PASSENGER_TASK_LIST_URL;
    case MovementMode.RoRoAccompaniedFreight:
    case MovementMode.RoRoUnaccompaniedFreight:
    case MovementMode.RoRoTourist:
      return RORO_TASK_LIST_URL;
    default:
      return DEFAULT_LIST_PAGE_URL;
  }
};

export const toTaskDetailLink = (taskId: string): string => {
  return TASK_DETAIL_URL.replace(':taskId', taskId);
};

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
