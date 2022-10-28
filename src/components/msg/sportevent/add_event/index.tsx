import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgAddEvent } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const AddEvent = (props: {
  message: MsgAddEvent;
}) => {
  const { message } = props;

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txAddEventContent"
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

export default AddEvent;
