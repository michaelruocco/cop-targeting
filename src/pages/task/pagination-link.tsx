import * as React from 'react';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../styles/pagination.scss';

class Props {
  pageNumber: number;
  child: React.ReactNode | React.ReactNode[];
  active: boolean;
  dataTest: string;
  onPageChanged: (pageNumber: number) => void;
}

const PaginationLink: FC<Props> = ({
  pageNumber,
  child,
  active = false,
  dataTest,
  onPageChanged,
}) => {
  const location = useLocation();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.blur();
    window.scrollTo(0, 0);
    console.log(`selected page ${pageNumber}`);
    onPageChanged(pageNumber);
  };

  return (
    <Link
      className={
        active ? 'pagination--link pagination--link-active' : 'pagination--link'
      }
      data-test={dataTest}
      onClick={handleClick}
      to={`${location.pathname}?page=${pageNumber}`}
    >
      {child}
    </Link>
  );
};

export default PaginationLink;
