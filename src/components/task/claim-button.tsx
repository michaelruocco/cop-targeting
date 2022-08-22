import * as React from 'react';
import { FC } from 'react';

import '../../styles/link-button.scss';

class Props {
  taskId: string;
}

const ClaimButton: FC<Props> = ({ taskId }) => {
  return (
    <button
      className="link-button govuk-!-font-weight-bold govuk-button"
      type="button"
    >
      Claim
    </button>
  );
};

export default ClaimButton;
