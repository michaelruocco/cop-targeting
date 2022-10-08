import * as React from 'react';
import { FC } from 'react';
import { Button } from '@ukhomeoffice/cop-react-components';
import { useNavigate } from 'react-router-dom';
import { PNR_ACCESS_URL } from '../../adapters/links/links';

const TriggerRequestPnrAccess: FC = () => {
  const navigate = useNavigate();

  const triggerPnrAccessRequest = () => {
    navigate(PNR_ACCESS_URL);
  };

  return (
    <>
      <p className="govuk-body-l govuk-!-margin-bottom-1">
        You have not requested access to view PNR data in your current session.
      </p>
      <Button onClick={() => triggerPnrAccessRequest()}>
        Request access to view PNR data
      </Button>
    </>
  );
};

export default TriggerRequestPnrAccess;
