import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import { Movement } from '../../adapters/task/task';

class Props {
  movement: Movement;
}

const iconClassNames: any = {
  'trailer-only': 'c-icon-trailer',
  'vehicle-only': 'c-icon-van',
  'vehicle-with-trailer': 'c-icon-hgv',
  vehicle: 'c-icon-car',
  individual: 'c-icon-person',
  group: 'c-icon-group',
};

const toIconClassName = (description: string): string => {
  const className = iconClassNames[description];
  if (!className) {
    return 'icon-position--left';
  }
  return `icon-position--left ${className}`;
};

const JourneyIcon: FC<Props> = ({ movement }) => {
  return <i className={toIconClassName(movement.description)}></i>;
};

export default JourneyIcon;
