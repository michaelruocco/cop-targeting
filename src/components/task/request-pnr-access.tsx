import * as React from 'react';
import { FC, useContext, useState } from 'react';
import AuthContext from '../../contexts/auth/auth-context';
import PnrAccessContext from '../../contexts/pnr/pnr-access-context';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ukhomeoffice/cop-react-components';

const RequestPnrAccess: FC = () => {
  const { getSessionId } = useContext(AuthContext);
  const { updatePnrAccessRequest } = useContext(PnrAccessContext);
  const [isRequested, setRequested] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRequested(event.target.value == 'true');
  };

  const handleClick = () => {
    updatePnrAccessRequest({
      sessionId: getSessionId(),
      isRequested: isRequested,
    });
    navigate('/air-passenger/tasks');
  };

  return (
    <>
      <div className="govuk-!-margin-bottom-1">
        <select
          className="govuk-select"
          id="pnr-access-requested"
          name="pnr-access-requested"
          onChange={handleChange}
        >
          <option key="requested" value="true">
            Requested
          </option>
          <option key="not-requested" value="false">
            Not Requested
          </option>
        </select>
      </div>
      <div>
        <Button onClick={() => handleClick()}>Submit</Button>
      </div>
    </>
  );
};

export default RequestPnrAccess;
