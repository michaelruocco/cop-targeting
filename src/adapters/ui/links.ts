import { Task, MovementMode } from '../task/task';

export const TASK_DETAIL_URL = '/task/:taskId';

export const PNR_ACCESS_URL = '/pnr-access';

export const DEFAULT_LIST_PAGE_URL = '/';
export const AIR_PASSENGER_TASK_LIST_URL = '/air-passenger/tasks';
export const RORO_TASK_LIST_URL = '/roro/tasks';

export const toTaskListLink = (task: Task): string => {
  switch (task.movement.mode) {
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
