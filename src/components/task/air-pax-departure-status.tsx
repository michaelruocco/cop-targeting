import * as React from 'react';
import { FC } from 'react';
import { DepartureStatus } from '../../adapters/task/targeting-api-client';
import { Tag } from '@ukhomeoffice/cop-react-components';

class Props {
  status: DepartureStatus;
}

type DepartureStatusConfig = {
  classname: string;
  description: string;
  code: string;
};

const departureConfirmedConfig: DepartureStatusConfig = {
  classname: 'green',
  description: 'Departure confirmed',
  code: 'DC',
};

const bookedPassengerConfig: DepartureStatusConfig = {
  classname: 'purple',
  description: 'Booked Passenger',
  code: 'BP',
};

const checkedInConfig: DepartureStatusConfig = {
  classname: 'blue',
  description: 'Checked-in',
  code: 'CI',
};

const departureExceptionConfig: DepartureStatusConfig = {
  classname: 'red',
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

const AirPaxDepartureStatus: FC<Props> = ({ status }) => {
  const config = toConfig(status);
  if (config === unknownConfig) {
    return <></>;
  }
  return (
    <Tag className={`airpax-status airpax-status__${config.classname}`}>
      {config.code}
    </Tag>
  );
};

export default AirPaxDepartureStatus;
