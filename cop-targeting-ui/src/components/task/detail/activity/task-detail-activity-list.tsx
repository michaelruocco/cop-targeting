import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Note } from '../../../../adapters/task/task';
import TaskDetailActivityEntry from './task-detail-activity-entry';

import './task-detail-activity-list.scss';

class Props {
  notes: Note[];
}

const TaskDetailActivityList: FC<Props> = ({ notes }) => {
  const toEntryComponents = (notes: Note[]) => {
    return notes.map((note) => {
      return <TaskDetailActivityEntry key={note.id} note={note} />;
    });
  };

  return (
    <>
      <h3 className="govuk-heading-m task-details-activity-log-heading">
        Task activity
      </h3>
      {toEntryComponents(notes)}
    </>
  );
};

export default TaskDetailActivityList;
