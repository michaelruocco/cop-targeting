import {
  TaskFilters,
  TaskCountsResponse,
  TaskSelectorCounts,
  TaskPageRequest,
  TaskPageResponse,
  FilterRule,
  HasSelectors,
  Task,
  MovementMode,
  MovementModeCounts,
  TaskStatusCounts,
  MovementDirectionCounts,
  MovementDirection,
  Note,
} from './task';
import { TaskStatus } from './task-status';
import { stubTasks } from './stub-tasks';
import jwt_decode from 'jwt-decode';
import { v4 as uuidv4 } from 'uuid';
import { utcNow } from '../date/date';

export interface TargetingApiClient {
  getFilterRules(): Promise<FilterRule[]>;
  getTaskCounts(request: TaskFilters): Promise<TaskCountsResponse>;
  getTaskPage(request: TaskPageRequest): Promise<TaskPageResponse>;
  getTask(taskId: string): Promise<Task>;
  claimTask(taskId: string): Promise<Task>;
  unclaimTask(taskId: string): Promise<Task>;
}

class StubTargetingApiClient implements TargetingApiClient {
  getToken: () => string;

  constructor(getToken: () => string) {
    this.getToken = getToken;
  }

  getFilterRules = (): Promise<FilterRule[]> => {
    const filterRules: FilterRule[] = [];
    stubTasks.map((stubTask) => {
      stubTask.risks.matchedRules.map((matchedRule) => {
        if (filterRules.some((rule) => rule.id === matchedRule.id)) {
          return;
        }
        filterRules.push({
          id: matchedRule.id,
          name: matchedRule.name,
        });
      });
    });
    console.log(`returning filter rules ${JSON.stringify(filterRules)}`);
    return Promise.resolve(filterRules);
  };

  getTaskCounts = (filters: TaskFilters): Promise<TaskCountsResponse> => {
    console.log(`get task counts ${JSON.stringify(filters)}`);

    const counts = {
      filters: filters,
      movementModeCounts: getMovementModeCounts(filters),
      taskStatusCounts: getTaskStatusCounts(filters),
      taskSelectorCounts: getTaskSelectorCounts(filters),
      movementDirectionCounts: getMovementDirectionCounts(filters),
    };

    console.log(`returning task counts ${JSON.stringify(counts)}`);
    return Promise.resolve(counts);
  };

  getTaskPage = async (request: TaskPageRequest): Promise<TaskPageResponse> => {
    console.log(`get task page ${JSON.stringify(request)}`);
    const pagination = request.pagination;
    const filteredTasks = stubTasks.filter((task) =>
      taskMatches(task, request.filters),
    );
    const taskPage = {
      request: request,
      totalNumberOfTasks: filteredTasks.length,
      tasks: filteredTasks.slice(
        pagination.offset,
        pagination.offset + pagination.limit,
      ),
    };
    console.debug(`returning task page ${JSON.stringify(taskPage)}`);
    return Promise.resolve(taskPage);
  };

  getTask = (taskId: string): Promise<Task> => {
    const task = stubTasks.find((stubTask) => {
      return stubTask.id === taskId;
    });
    return Promise.resolve(task);
  };

  claimTask = async (taskId: string): Promise<Task> => {
    const task = await this.getTask(taskId);
    task.status = TaskStatus.InProgress;
    task.assignee = this.#getUserEmail();
    task.notes.push(this.#toNote('task claimed'));
    return task;
  };

  unclaimTask = async (taskId: string): Promise<Task> => {
    const task = await this.getTask(taskId);
    task.status = TaskStatus.New;
    task.assignee = null;
    task.notes.push(this.#toNote('task unclaimed'));
    return task;
  };

  #toNote = (content: string): Note => {
    return {
      id: uuidv4(),
      content: content,
      timestamp: utcNow(),
      userId: this.#getUserEmail(),
    };
  };

  #getUserEmail = (): string => {
    return extractEmail(this.getToken());
  };
}

const getMovementModeCounts = (filters: TaskFilters): MovementModeCounts => {
  return {
    roRoAccompaniedFreight: stubTasks.filter((task) =>
      taskMatchesMode(task, MovementMode.RoRoAccompaniedFreight, filters),
    ).length,
    roRoUnaccompaniedFreight: stubTasks.filter((task) =>
      taskMatchesMode(task, MovementMode.RoRoUnaccompaniedFreight, filters),
    ).length,
    roRoTourist: stubTasks.filter((task) =>
      taskMatchesMode(task, MovementMode.RoRoTourist, filters),
    ).length,
    airPassenger: stubTasks.filter((task) =>
      taskMatchesMode(task, MovementMode.AirPassenger, filters),
    ).length,
  };
};

const getTaskStatusCounts = (filters: TaskFilters): TaskStatusCounts => {
  return {
    new: stubTasks.filter((task) =>
      taskMatchesStatus(task, TaskStatus.New, filters),
    ).length,
    inProgress: stubTasks.filter((task) =>
      taskMatchesStatus(task, TaskStatus.InProgress, filters),
    ).length,
    issued: stubTasks.filter((task) =>
      taskMatchesStatus(task, TaskStatus.Issued, filters),
    ).length,
    complete: stubTasks.filter((task) =>
      taskMatchesStatus(task, TaskStatus.Complete, filters),
    ).length,
  };
};

const getTaskSelectorCounts = (filters: TaskFilters): TaskSelectorCounts => {
  return {
    hasSelector: stubTasks.filter((task) =>
      taskMatchesSelectorStatus(task, HasSelectors.Present, filters),
    ).length,
    hasNoSelector: stubTasks.filter((task) =>
      taskMatchesSelectorStatus(task, HasSelectors.NotPresent, filters),
    ).length,
    both: stubTasks.filter((task) =>
      taskMatchesSelectorStatus(task, HasSelectors.Any, filters),
    ).length,
  };
};

const extractEmail = (jwt: string): string => {
  const decoded: any = jwt_decode(jwt);
  return decoded.email;
};

const getMovementDirectionCounts = (
  filters: TaskFilters,
): MovementDirectionCounts => {
  return {
    inbound: stubTasks.filter((task) =>
      taskMatchesMovementDirection(task, MovementDirection.Inbound, filters),
    ).length,
    outbound: stubTasks.filter((task) =>
      taskMatchesMovementDirection(task, MovementDirection.Outbound, filters),
    ).length,
    unknown: stubTasks.filter((task) =>
      taskMatchesMovementDirection(task, MovementDirection.Unknown, filters),
    ).length,
  };
};

const taskMatchesMode = (
  task: Task,
  movementMode: MovementMode,
  filters: TaskFilters,
): boolean => {
  var statusFilters = Object.create(filters);
  statusFilters.movementModes = [movementMode];
  return taskMatches(task, statusFilters);
};

const taskMatchesStatus = (
  task: Task,
  status: TaskStatus,
  filters: TaskFilters,
): boolean => {
  var statusFilters = Object.create(filters);
  statusFilters.statuses = [status];
  return taskMatches(task, statusFilters);
};

const taskMatchesSelectorStatus = (
  task: Task,
  status: HasSelectors,
  filters: TaskFilters,
): boolean => {
  var statusFilters: TaskFilters = Object.create(filters);
  statusFilters.selectors = status;
  return taskMatches(task, statusFilters);
};

const taskMatchesMovementDirection = (
  task: Task,
  movementDirection: MovementDirection,
  filters: TaskFilters,
): boolean => {
  var statusFilters: TaskFilters = Object.create(filters);
  statusFilters.movementDirections = [movementDirection];
  return taskMatches(task, statusFilters);
};

const taskMatches = (task: Task, filters: TaskFilters): boolean => {
  if (!filters.movementModes.includes(task.movement.mode)) {
    return false;
  }
  if (!filters.statuses.includes(task.status)) {
    return false;
  }
  const direction =
    task?.movement?.journey?.direction || MovementDirection.Unknown;
  if (!filters.movementDirections.includes(direction)) {
    return false;
  }
  if (
    filters.selectors === HasSelectors.NotPresent &&
    task.risks.matchedSelectorGroups.totalNumberOfSelectors > 0
  ) {
    return false;
  }
  if (
    filters.selectors === HasSelectors.Present &&
    task.risks.matchedSelectorGroups.totalNumberOfSelectors < 1
  ) {
    return false;
  }
  const filterRuleIds = filters.rules.map((rule) => rule.id);
  const taskRuleIds = task.risks.matchedRules.map((rule) => rule.id);
  if (
    filterRuleIds.length > 0 &&
    !filterRuleIds.some((id) => taskRuleIds.includes(id))
  ) {
    return false;
  }
  return true;
};

export const getClient = (getToken: () => string): TargetingApiClient => {
  return new StubTargetingApiClient(getToken);
};
