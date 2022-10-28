import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgWithdrawDelegatorIncentive } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const WithdrawDelegatorIncentive = (props: {
  message: MsgWithdrawDelegatorIncentive;
}) => {
  const { message } = props;

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  const validator = useProfileRecoil(message.valAddress);
  const validatorMoniker = validator ? validator?.name : message.valAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txWithdrawDelegatorIncentiveContent"
        components={[
          (
            <Name
              address={message.fromAddress}
              name={fromMoniker}
            />
          ),
          (
            <Name
              address={message.valAddress}
              name={validatorMoniker}
            />
          ),
          <b />,
        ]}
        values={{}}
      />
    </Typography>
  );
};

export default WithdrawDelegatorIncentive;
