import * as React from 'react';
import * as _ from 'lodash';
import { FC } from 'react';
import {
  TargetingIndicators,
  TargetingIndicator,
  toIndicatorsCountAndScoreText,
} from '../../../adapters/task/task';
import * as pluralise from 'pluralize';

class Props {
  targetingIndicators: TargetingIndicators;
}

type IndicatorDetail = {
  description: string;
  score: string;
};

const TaskDetailTargetingIndicators: FC<Props> = ({ targetingIndicators }) => {
  const toIndicatorDetail = (
    indicators: TargetingIndicator[],
    index: number,
  ): IndicatorDetail => {
    if (indicators && index <= indicators.length - 1) {
      return {
        description: indicators[index].description,
        score: indicators[index].score.toString(),
      };
    }
    return {
      description: '',
      score: '',
    };
  };

  const toIndicatorColumn = (
    indicators: TargetingIndicator[],
    index: number,
    columnClassNameSuffix: string,
  ) => {
    const columnClassName = `govuk-grid-column-one-third ${columnClassNameSuffix}`;
    const detail = toIndicatorDetail(indicators, index);
    return (
      <div className={columnClassName}>
        <div className="govuk-grid-column-three-quarters">
          <span>{detail.description}</span>
        </div>
        <div
          className="govuk-grid-column-one-quarter"
          style={{ textAlign: 'right' }}
        >
          <span className="font__bold">{detail.score}</span>
        </div>
      </div>
    );
  };

  const toIndicatorRows = (indicators: TargetingIndicator[]) => {
    const chunks = _.chunk(indicators, 3);
    if (!chunks) {
      return null;
    }
    return chunks.map((chunk) => {
      if (!chunk) {
        return null;
      }
      return (
        <div
          key={chunk[0].id}
          className="govuk-task-details-grid"
          style={{ border: 'none', padding: '2px' }}
        >
          {toIndicatorColumn(chunk, 0, '')}
          {toIndicatorColumn(chunk, 1, 'vertical-dotted-line-one')}
          {toIndicatorColumn(chunk, 2, 'vertical-dotted-line-two')}
        </div>
      );
    });
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        key="targeting-indicators-header"
        className="govuk-grid-row grid-background--greyed"
        style={{ marginBottom: '10px', paddingBottom: '10px' }}
      >
        <div className="govuk-grid-column-one-third">
          <span className="govuk-!-font-weight-bold">
            {toIndicatorsCountAndScoreText(targetingIndicators)}
          </span>
        </div>
      </div>
      {toIndicatorRows(targetingIndicators.indicators)}
    </div>
  );
};

export default TaskDetailTargetingIndicators;
