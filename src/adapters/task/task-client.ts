export enum MovementMode {
  RoRoTourist = 'RORO_TOURIST',
  RoRoAccompaniedFreight = 'RORO_ACCOMPANIED_FREIGHT',
  RoRoUnaccompaniedFreight = 'RORO_UNACCOMPANIED_FREIGHT',
  AirPassenger = 'AIR_PASSENGER',
}

export enum TaskStatus {
  New = 'NEW',
  InProgress = 'IN_PROGRESS',
  Issued = 'ISSUED',
  Complete = 'COMPLETE',
}

export type TaskCountsRequest = {
  modes: MovementMode[];
  statuses: TaskStatus[];
};

export type TaskCountsResponse = {
  request: TaskCountsRequest;
  new: number;
  inProgress: number;
  issued: number;
  complete: number;
};

export type Pagination = {
  offset: number;
  limit: number;
};

export type TaskPageRequest = {
  modes: MovementMode[];
  statuses: TaskStatus[];
  pagination: Pagination;
};

export type TaskPageResponse = {
  request: TaskPageRequest;
  totalNumberOfTasks: number;
  tasks: Task[];
};

export type Task = {
  id: string;
};

interface TaskClient {
  getTaskCounts(request: TaskCountsRequest): Promise<TaskCountsResponse>;
  getTaskPage(request: TaskPageRequest): Promise<TaskPageResponse>;
}

export class StubTaskClient implements TaskClient {
  getToken: () => string;

  constructor(getToken: () => string) {
    this.getToken = getToken;
  }

  getTaskCounts = (request: TaskCountsRequest): Promise<TaskCountsResponse> => {
    console.log(`getTaskCounts token ${this.getToken()}`);
    return Promise.resolve({
      request: request,
      new: 4,
      inProgress: 3,
      issued: 2,
      complete: 1,
    });
  };

  getTaskPage = (request: TaskPageRequest): Promise<TaskPageResponse> => {
    console.log(`getTaskPage token ${this.getToken()}`);
    return Promise.resolve({
      request: request,
      totalNumberOfTasks: 4,
      tasks: [
        {
          id: 'DEV-20220702-001',
        },
        {
          id: 'DEV-20220702-002',
        },
        {
          id: 'DEV-20220702-003',
        },
        {
          id: 'DEV-20220702-004',
        },
      ],
    });
  };
}
