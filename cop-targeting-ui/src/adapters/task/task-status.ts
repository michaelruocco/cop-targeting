export enum TaskStatus {
  New = 'NEW',
  InProgress = 'IN_PROGRESS',
  Issued = 'ISSUED',
  Complete = 'COMPLETE',
}

export const parseTaskStatus = (input: string): TaskStatus => {
  if (!input) {
    return TaskStatus.New;
  }
  const sanitized = input.toUpperCase().replace('_', '');
  switch (sanitized) {
    case 'NEW':
      return TaskStatus.New;
    case 'INPROGRESS':
      return TaskStatus.InProgress;
    case 'ISSUED':
      return TaskStatus.Issued;
    case 'COMPLETE':
      return TaskStatus.Complete;
    default:
      return TaskStatus.New;
  }
};

export const formatTaskStatus = (status: TaskStatus): string => {
  switch (status) {
    case TaskStatus.New:
      return 'New';
    case TaskStatus.InProgress:
      return 'In Progress';
    case TaskStatus.Issued:
      return 'Issued';
    case TaskStatus.Complete:
      return 'Complete';
    default:
      return 'Unknown';
  }
};
