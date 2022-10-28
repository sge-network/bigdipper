import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSettleBetBulk } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const SettleBetBulk = (props: {
  message: MsgSettleBetBulk;
}) => {
  const { message } = props;

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSettleBetBulkContent"
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
          uids: message.betUids.toString(),
        }}
      />
    </Typography>
  );
};

export default SettleBetBulk;
