import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import { Note } from '../../adapters/task/task';

import '../../styles/task-detail-page.scss';

class Props {
  note: Note;
}

const TaskDetailActivityEntry: FC<Props> = ({ note }) => {
  const toDateTimeComponent = (timestamp: Date) => {
    return (
      <>
        <span className="govuk-!-font-weight-bold">
          {timestamp.toLocaleDateString()}
        </span>
        &nbsp;at{' '}
        <span className="govuk-!-font-weight-bold">
          {timestamp.toLocaleTimeString()}
        </span>
      </>
    );
  };

  const toUserIdLink = (userId: string) => {
    return (
      <p className="govuk-body-s govuk-!-margin-bottom-2">
        by <a href={`mailto:${userId}`}>{userId}</a>
      </p>
    );
  };

  return (
    <div key={note.id}>
      <div className="activity-body-container">
        {toDateTimeComponent(note.timestamp)}
        {toUserIdLink(note.userId)}
        <p className="govuk-body">{note.content}</p>
      </div>
      <hr className="govuk-section-break govuk-section-break--m govuk-section-break--visible" />
    </div>
  );
};

export default TaskDetailActivityEntry;
