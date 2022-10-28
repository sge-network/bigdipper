import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgWithdrawValidatorIncentive } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const WithdrawValidatorIncentive = (props: {
  message: MsgWithdrawValidatorIncentive;
}) => {
  const { message } = props;

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txWithdrawValidatorIncentiveContent"
        components={[
          (
            <Name
              address={message.fromAddress}
              name={fromMoniker}
            />
          ),
          <b />,
        ]}
        values={{}}
      />
    </Typography>
  );
};

export default WithdrawValidatorIncentive;
