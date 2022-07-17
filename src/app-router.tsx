import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AirPaxTaskListPage from './pages/task/air-pax-task-list-page';
import RoRoTaskListPage from './pages/task/roro-task-list-page';

const AppRouter: FC = () => {
  document.body.className = document.body.className
    ? `${document.body.className} js-enabled`
    : 'js-enabled';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/roro-tasks" />} />
        <Route path="/roro-tasks" element={<RoRoTaskListPage />} />
        <Route path="/air-pax-tasks" element={<AirPaxTaskListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
