import * as React from 'react';
import { FC } from 'react';
import { DepartureStatus } from '../../adapters/task/task';
import { Tag } from '@ukhomeoffice/cop-react-components';

import './tag.scss';

class Props {
  status: DepartureStatus;
}

type DepartureStatusConfig = {
  classname: string;
  description: string;
  code: string;
};

const departureConfirmedConfig: DepartureStatusConfig = {
  classname: 'govuk-tag govuk-tag--departureConfirmed',
  description: 'Departure confirmed',
  code: 'DC',
};

const bookedPassengerConfig: DepartureStatusConfig = {
  classname: 'govuk-tag govuk-tag--bookedPassenger',
  description: 'Booked Passenger',
  code: 'BP',
};

const checkedInConfig: DepartureStatusConfig = {
  classname: 'govuk-tag govuk-tag--checkedId',
  description: 'Checked-in',
  code: 'CI',
};

const departureExceptionConfig: DepartureStatusConfig = {
  classname: 'govuk-tag govuk-tag--departureException',
  description: 'Departure exception',
  code: 'DX',
};

const unknownConfig: DepartureStatusConfig = {
  classname: 'grey',
  description: 'Unknown',
  code: 'NA',
};

const toConfig = (status: DepartureStatus): DepartureStatusConfig => {
  switch (status) {
    case DepartureStatus.BookedPassenger:
      return bookedPassengerConfig;
    case DepartureStatus.CheckedIn:
      return checkedInConfig;
    case DepartureStatus.DepartureConfirmed:
      return departureConfirmedConfig;
    case DepartureStatus.DepartureException:
      return departureExceptionConfig;
    default:
      return unknownConfig;
  }
};

const DepartureStatusTag: FC<Props> = ({ status }) => {
  const config = toConfig(status);
  if (config === unknownConfig) {
    return <></>;
  }
  const forceBold: any = { fontWeight: 'bold' };
  return (
    <Tag className={config.classname} style={forceBold}>
      {config.code}
    </Tag>
  );
};

export default DepartureStatusTag;
