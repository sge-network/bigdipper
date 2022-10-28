import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgResolveEvent } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const ResolveEvent = (props: {
  message: MsgResolveEvent;
}) => {
  const { message } = props;

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txResolveEventContent"
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
          ticket: message.ticket,
        }}
      />
    </Typography>
  );
};

export default ResolveEvent;
