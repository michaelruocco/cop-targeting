import * as React from 'react';
import { FC } from 'react';
import * as _ from 'lodash';
import { MovementMode } from '../../adapters/task/task';

class Props {
  mode: MovementMode;
}

const toIconClassName = (mode: MovementMode): string => {
  switch (mode) {
    case MovementMode.RoRoAccompaniedFreight:
    case MovementMode.RoRoUnaccompaniedFreight:
    case MovementMode.RoRoTourist:
      return 'c-icon-ship';
    case MovementMode.AirPassenger:
      return 'c-icon-aircraft';
    default:
      return '';
  }
};

const MovementModeIcon: FC<Props> = ({ mode }) => {
  return <i className={toIconClassName(mode)}></i>;
};

export default MovementModeIcon;
