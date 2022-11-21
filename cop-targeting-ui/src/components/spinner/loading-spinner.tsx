import * as React from 'react';
import { FC } from 'react';

import './loading-spinner.scss';

const LoadingSpinner: FC = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner--inner">
        <svg
          version="1.1"
          fill="#0b0c0c"
          width="50px"
          height="50px"
          className="icon-loading"
          viewBox="-25 -25 50 50"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Loading</title>
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(0, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '0ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(30, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '83ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(60, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '166ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(90, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '249ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(120, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '332ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(150, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '415ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(180, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '498ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(210, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '581ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(240, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '664ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(270, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '747ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(300, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '830ms' }}
          />
          <rect
            fill="#0b0c0c"
            width="12"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(330, 0, 2) translate(10 0)"
            opacity="0"
            className="loading-spinner--spin"
            style={{ animationDelay: '913ms' }}
          />
        </svg>
        <div className="loading-spinner--overlay" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
