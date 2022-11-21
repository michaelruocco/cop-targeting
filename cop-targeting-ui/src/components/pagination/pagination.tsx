import * as React from 'react';
import { FC } from 'react';

import './pagination.scss';
import PaginationLink from './pagination-link';
import * as pluralise from 'pluralize';

class Props {
  currentPage: number;
  totalNumberOfItems: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
}

const calculateNumberOfPages = (
  totalNumberOfItems: number,
  pageSize: number,
): number => {
  return Math.ceil(totalNumberOfItems / pageSize);
};

const calculateAriaLabel = (numberOfPages: number): string => {
  const suffix = pluralise('pages', numberOfPages, true);
  return `pagination: total ${numberOfPages} ${suffix}`;
};

const calculateFirstItem = (pageSize: number, currentPage: number): number => {
  if (currentPage < 2) {
    return 1;
  }
  return (currentPage - 1) * pageSize + 1;
};

const calculateLastItem = (
  pageSize: number,
  currentPage: number,
  totalNumberOfItems: number,
): number => {
  const lastItem = currentPage * pageSize;
  if (lastItem > totalNumberOfItems) {
    return totalNumberOfItems;
  }
  return lastItem;
};

const maxPageNumbersShown = 5;

class Limits {
  lower: number;
  upper: number;
}

const calculateLimits = (
  currentPage: number,
  numberOfPages: number,
  maxPageNumbersShown: number,
): Limits => {
  var lowerLimit = currentPage;
  var upperLimit = currentPage;
  for (let i = 1; i < maxPageNumbersShown && i < numberOfPages; ) {
    if (lowerLimit > 1) {
      lowerLimit -= 1;
      i += 1;
    }

    if (i < maxPageNumbersShown && upperLimit < numberOfPages) {
      upperLimit += 1;
      i += 1;
    }
  }
  return {
    lower: lowerLimit,
    upper: upperLimit,
  };
};

const Pagination: FC<Props> = ({
  currentPage,
  totalNumberOfItems,
  pageSize,
  onPageChanged,
}) => {
  const numberOfPages = calculateNumberOfPages(totalNumberOfItems, pageSize);
  if (numberOfPages < 2) {
    return <></>;
  }

  const buildComponents = (
    currentPage: number,
    numberOfPages: number,
  ): React.ReactNode[] => {
    const components = [];

    const isFirstPage = currentPage <= 1;
    if (!isFirstPage) {
      components.push(buildFirstLink());
      components.push(buildPreviousLink());
    }

    const limits = calculateLimits(
      currentPage,
      numberOfPages,
      maxPageNumbersShown,
    );
    const lowerLimit = limits.lower;
    if (lowerLimit > 1) {
      components.push(buildPageLink(1));
      components.push(buildEllipsis('lower-ellipsis'));
    }

    const upperLimit = limits.upper;
    for (var pageNumber = lowerLimit; pageNumber <= upperLimit; pageNumber++) {
      components.push(buildPageLink(pageNumber));
    }

    if (limits.upper < numberOfPages) {
      components.push(buildEllipsis('upper-ellipsis'));
      components.push(buildPageLink(numberOfPages));
    }

    const isLastPage = currentPage === numberOfPages;
    if (!isLastPage) {
      components.push(buildNextLink());
      components.push(buildLastLink());
    }
    return components;
  };

  const buildFirstLink = (): React.ReactNode => {
    return (
      <li className="pagination--list-item" key="first-page">
        <PaginationLink
          pageNumber={1}
          child={
            <span>
              <span aria-hidden="true" role="presentation">
                «
              </span>
              &nbsp;First
            </span>
          }
          active={false}
          dataTest="first"
          onPageChanged={onPageChanged}
        />
      </li>
    );
  };

  const buildPreviousLink = (): React.ReactNode => {
    return (
      <li className="pagination--list-item" key="previous-page">
        <PaginationLink
          pageNumber={currentPage - 1}
          child={<span>Previous</span>}
          active={false}
          dataTest="prev"
          onPageChanged={onPageChanged}
        />
      </li>
    );
  };

  const buildEllipsis = (key: string): React.ReactNode => {
    return (
      <li className="pagination--list-item" key={key}>
        <span className="pagination--ellipsis" data-test="ellipsis">
          …
        </span>
      </li>
    );
  };

  const buildPageLink = (pageNumber: number): React.ReactNode => {
    const isActive = pageNumber === currentPage;
    const key = `page-number-${pageNumber}`;
    return (
      <li className="pagination--list-item" key={key}>
        <PaginationLink
          pageNumber={pageNumber}
          child={<span>{pageNumber}</span>}
          active={isActive}
          dataTest={isActive ? 'page-number-active' : 'page-number'}
          onPageChanged={onPageChanged}
        />
      </li>
    );
  };

  const buildNextLink = (): React.ReactNode => {
    return (
      <li className="pagination--list-item" key="next-page">
        <PaginationLink
          pageNumber={currentPage + 1}
          child={<span>Next</span>}
          active={false}
          dataTest="next"
          onPageChanged={onPageChanged}
        />
      </li>
    );
  };

  const buildLastLink = (): React.ReactNode => {
    return (
      <li className="pagination--list-item" key="last-page">
        <PaginationLink
          pageNumber={numberOfPages}
          child={
            <span>
              Last&nbsp;
              <span aria-hidden="true" role="presentation">
                »
              </span>
            </span>
          }
          active={false}
          dataTest="last"
          onPageChanged={onPageChanged}
        />
      </li>
    );
  };

  const firstItem = calculateFirstItem(pageSize, currentPage);
  const lastItem = calculateLastItem(pageSize, currentPage, totalNumberOfItems);
  const components = buildComponents(currentPage, numberOfPages);

  return (
    <div>
      <nav
        className="pagination"
        aria-label={calculateAriaLabel(numberOfPages)}
      >
        <div className="pagination--summary">
          Showing {firstItem} - {lastItem} of {totalNumberOfItems} results
        </div>
        <ul className="pagination--list">{components}</ul>
      </nav>
    </div>
  );
};

export default Pagination;
