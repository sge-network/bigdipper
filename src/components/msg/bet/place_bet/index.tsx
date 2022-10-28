import React from 'react';
import Trans from 'next-translate/Trans';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgPlaceBet } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const PlaceBet = (props: {
  message: MsgPlaceBet;
}) => {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const parsedAmount = message?.bet.amount?.map((x) => {
    const amount = formatToken(x.amount, x.denom);
    return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txPlaceBetContent"
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
          amount: parsedAmount,
          uid: message.bet.uid,
          ticket: message.bet.ticket,
        }}
      />
    </Typography>
  );
};

export default PlaceBet;
