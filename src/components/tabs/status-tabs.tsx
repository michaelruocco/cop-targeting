import * as React from 'react';
import { FC } from 'react';
import { TaskCountsResponse } from '../../adapters/task/task';
import { TaskStatus } from '../../adapters/task/task-status';
import StatusTabLink from './status-tab-link';

class Props {
  taskCounts: TaskCountsResponse;
  currentStatus: TaskStatus;
  onStatusSelected: (status: TaskStatus) => void;
}

const StatusTabs: FC<Props> = ({
  taskCounts,
  currentStatus,
  onStatusSelected,
}) => {
  const toLabel = (status: TaskStatus, counts: TaskCountsResponse): string => {
    switch (status) {
      case TaskStatus.New:
        return `New (${counts.new})`;
      case TaskStatus.InProgress:
        return `In Progress (${counts.inProgress})`;
      case TaskStatus.Issued:
        return `Issued (${counts.issued})`;
      case TaskStatus.Complete:
        return `Complete (${counts.complete})`;
    }
  };

  const tabs = [
    TaskStatus.New,
    TaskStatus.InProgress,
    TaskStatus.Issued,
    TaskStatus.Complete,
  ].map((status) => (
    <StatusTabLink
      key={status}
      label={toLabel(status, taskCounts)}
      status={status}
      active={currentStatus === status}
      onStatusSelected={onStatusSelected}
    />
  ));

  return (
    <div>
      <ul className="govuk-tabs__list">{tabs}</ul>
    </div>
  );
};

export default StatusTabs;
