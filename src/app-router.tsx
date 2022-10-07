import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
          <Route path="/" element={<Navigate to="/roro/tasks" />} />
          <Route path="/roro/tasks" element={<RoRoTaskListPage />} />
          <Route path="/air-passenger/tasks" element={<AirPaxTaskListPage />} />
          <Route path="/pnr-access" element={<RequestPnrAccessPage />} />
          <Route path="/task/:taskId" element={<TaskDetailPage />} />
        </Routes>
      </PnrAccessProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
