import * as React from 'react';
import { FC } from 'react';

import '../../styles/pagination.scss';

const Pagination: FC = () => {
  return (
    <div>
      <nav className="pagination" aria-label="pagination: total 2 pages">
        <div className="pagination--summary">
          Showing 1 - 100 of 123 results
        </div>
        <ul className="pagination--list">
          <li className="pagination--list-item">
            <a
              className="pagination--link pagination--link-active"
              data-test="page-number-active"
              href="/airpax/tasks?page=1"
            >
              1
            </a>
          </li>
          <li className="pagination--list-item">
            <a
              className="pagination--link"
              data-test="page-number"
              href="/airpax/tasks?page=2"
            >
              2
            </a>
          </li>
          <li className="pagination--list-item">
            <a
              className="pagination--link"
              data-test="next"
              href="/airpax/tasks?page=2"
            >
              Next
            </a>
          </li>
          <li className="pagination--list-item">
            <a
              className="pagination--link"
              data-test="last"
              href="/airpax/tasks?page=2"
            >
              Last&nbsp;
              <span aria-hidden="true" role="presentation">
                »
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
