export enum MovementMode {
  RoRoTourist = 'RORO_TOURIST',
  RoRoAccompaniedFreight = 'RORO_ACCOMPANIED_FREIGHT',
  RoRoUnaccompaniedFreight = 'RORO_UNACCOMPANIED_FREIGHT',
  AirPassenger = 'AIR_PASSENGER',
}

export enum HasSelectors {
  Present = 'PRESENT',
  NotPresent = 'NOT_PRESENT',
  Any = 'ANY',
}

export enum TaskStatus {
  New = 'NEW',
  InProgress = 'IN_PROGRESS',
  Issued = 'ISSUED',
  Complete = 'COMPLETE',
}

export class Filters {
  movementModes: MovementMode[];
  statuses: TaskStatus[];
  selectors: HasSelectors;
  rules: FilterRule[];
  searchText: string;
}

export class FilterRule {
  id: string;
  name: string;
}

export type TaskCountsRequest = {
  movementModes: MovementMode[];
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
  filters: Filters;
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

interface TargetingApiClient {
  getTaskCounts(request: TaskCountsRequest): Promise<TaskCountsResponse>;
  getTaskPage(request: TaskPageRequest): Promise<TaskPageResponse>;
}

export class StubTargetingApiClient implements TargetingApiClient {
  getToken: () => string;

  constructor(getToken: () => string) {
    this.getToken = getToken;
  }

  getFilterRules = (): Promise<FilterRule[]> => {
    return Promise.resolve([
      {
        id: '1',
        name: 'Rule 1',
      },
      {
        id: '2',
        name: 'Rule 2',
      },
    ]);
  };

  getTaskCounts = (request: TaskCountsRequest): Promise<TaskCountsResponse> => {
    console.log(`getTaskCounts ${JSON.stringify(request)}`);
    return Promise.resolve({
      request: request,
      new: stubTasks.length,
      inProgress: 0,
      issued: 0,
      complete: 0,
    });
  };

  getTaskPage = (request: TaskPageRequest): Promise<TaskPageResponse> => {
    console.log(`getTaskPage ${JSON.stringify(request)}`);
    const pagination = request.pagination;
    return Promise.resolve({
      request: request,
      totalNumberOfTasks: stubTasks.length,
      tasks: stubTasks.slice(
        pagination.offset,
        pagination.offset + pagination.limit,
      ),
    });
  };
}

const stubTasks: Task[] = [
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
  {
    id: 'DEV-20220702-005',
  },
  {
    id: 'DEV-20220702-006',
  },
  {
    id: 'DEV-20220702-007',
  },
  {
    id: 'DEV-20220702-008',
  },
  {
    id: 'DEV-20220702-009',
  },
  {
    id: 'DEV-20220702-010',
  },
  {
    id: 'DEV-20220702-011',
  },
  {
    id: 'DEV-20220702-012',
  },
  {
    id: 'DEV-20220702-013',
  },
  {
    id: 'DEV-20220702-014',
  },
  {
    id: 'DEV-20220702-015',
  },
  {
    id: 'DEV-20220702-016',
  },
];
