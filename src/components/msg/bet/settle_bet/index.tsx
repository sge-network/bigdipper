import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSettleBet } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const SettleBet = (props: {
  message: MsgSettleBet;
}) => {
  const { message } = props;

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSettleBetContent"
        components={[
          (
            <Name
              address={message.fromAddress}
              name={fromMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          uid: message.uid,
        }}
      />
    </Typography>
  );
};

export default SettleBet;
