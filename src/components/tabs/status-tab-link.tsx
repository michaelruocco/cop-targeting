import * as React from 'react';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TaskStatus } from '../../adapters/task/targeting-api-client';

import '../../styles/pagination.scss';

class Props {
  label: string;
  status: TaskStatus;
  active: boolean;
  onStatusSelected: (status: TaskStatus) => void;
}

const StatusTabLink: FC<Props> = ({
  label,
  status,
  active = false,
  onStatusSelected,
}) => {
  const location = useLocation();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.blur();
    onStatusSelected(status);
  };

  return (
    <li
      className={
        active
          ? 'govuk-tabs__list-item govuk-tabs__list-item--selected'
          : 'govuk-tabs__list-item'
      }
    >
      <Link
        className="govuk-tabs__tab"
        onClick={handleClick}
        to={`${location.pathname}?status=${status}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default StatusTabLink;
