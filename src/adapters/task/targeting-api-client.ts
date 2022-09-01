import {
  TaskFilters,
  TaskCountsResponse,
  TaskSelectorStatusCounts,
  TaskPageRequest,
  TaskPageResponse,
  FilterRule,
  HasSelectors,
  Task,
} from './task-entities';
import { TaskStatus } from './task-status-entity';
import { stubTasks } from './stub-tasks';

interface TargetingApiClient {
  getTaskCounts(request: TaskFilters): Promise<TaskCountsResponse>;
  getTaskSelectorStatusCounts(
    request: TaskFilters,
  ): Promise<TaskSelectorStatusCounts>;
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
        id: 7808,
        name: 'PNR-Arrival Airport',
      },
      {
        id: 7844,
        name: 'Return Leg- Return',
      },
    ]);
  };

  getTaskCounts = (filters: TaskFilters): Promise<TaskCountsResponse> => {
    console.log(`getTaskCounts ${JSON.stringify(filters)}`);

    const counts = {
      filters: filters,
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

    console.log(`returningTaskCounts ${JSON.stringify(counts)}`);
    return Promise.resolve(counts);
  };

  getTaskSelectorStatusCounts = (
    filters: TaskFilters,
  ): Promise<TaskSelectorStatusCounts> => {
    console.log(`getTaskSelectorStatusCounts ${JSON.stringify(filters)}`);

    const counts: TaskSelectorStatusCounts = {
      hasSelector: stubTasks.filter((task) =>
        taskHasSelectorStatus(task, HasSelectors.Present, filters),
      ).length,
      hasNoSelector: stubTasks.filter((task) =>
        taskHasSelectorStatus(task, HasSelectors.NotPresent, filters),
      ).length,
      both: stubTasks.filter((task) =>
        taskHasSelectorStatus(task, HasSelectors.Any, filters),
      ).length,
    };

    console.log(`returningTaskSelectorStatusCounts ${JSON.stringify(counts)}`);
    return Promise.resolve(counts);
  };

  getTaskPage = async (request: TaskPageRequest): Promise<TaskPageResponse> => {
    console.log(`getTaskPage ${JSON.stringify(request)}`);
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
    console.debug(`returningTaskPage ${JSON.stringify(taskPage)}`);
    return Promise.resolve(taskPage);
  };
}

const taskMatchesStatus = (
  task: Task,
  status: TaskStatus,
  filters: TaskFilters,
): boolean => {
  var statusFilters = Object.create(filters);
  statusFilters.statuses = [status];
  return taskMatches(task, statusFilters);
};

const taskHasSelectorStatus = (
  task: Task,
  status: HasSelectors,
  filters: TaskFilters,
): boolean => {
  var statusFilters: TaskFilters = Object.create(filters);
  statusFilters.selectors = status;
  return taskMatches(task, statusFilters);
};

const taskMatches = (task: Task, filters: TaskFilters): boolean => {
  if (!filters.movementModes.includes(task.movement.mode)) {
    return false;
  }
  if (!filters.statuses.includes(task.status)) {
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
