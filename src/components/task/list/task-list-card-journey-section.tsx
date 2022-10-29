import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import { Movement } from '../../../adapters/task/task';
import JourneyIcon from '../../icon/journey-icon';
import MovementModeIcon from '../../icon/movement-mode-icon';
import GroupDescription from './group-description';
import JourneyDescription from './journey-description';
import JourneyTitle from './journey-title';

class Props {
  movement: Movement;
}

const TaskListCardJourneySection: FC<Props> = ({ movement }) => {
  return (
    <section className="task-list--voyage-section">
      <div>
        <div className="govuk-grid-row grid-background--greyed">
          <div className="govuk-grid-column-one-quarter govuk-!-padding-left-9">
            <JourneyIcon movement={movement} />
            <GroupDescription movement={movement} />
            <JourneyTitle movement={movement} />
          </div>
          <div className="govuk-grid-column-three-quarters govuk-!-padding-right-7 align-right">
            <MovementModeIcon mode={movement.mode} />
            <JourneyDescription movement={movement} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskListCardJourneySection;
