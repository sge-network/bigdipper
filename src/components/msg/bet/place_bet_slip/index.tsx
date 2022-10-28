import React from 'react';
import Trans from 'next-translate/Trans';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgPlaceBetSlip } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';

const PlaceBetSlip = (props: {
  message: MsgPlaceBetSlip;
}) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  const { message } = props;

  const bets = message?.bets?.map((output) => {
    const parsedAmount = output?.amount?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

    return {
      uid: output.uid,
      amount: parsedAmount,
      ticket: output.ticket,
    };
  });

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <div>
      <Typography>
        <Trans
          i18nKey="message_contents:txPlaceBetSlipContentOne"
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
      <div className={classes.placebetslip}>
        {
          bets?.map((x) => {
            return (
              <Typography>
                <Trans
                  i18nKey="message_contents:txPlaceBetSlipContentTwo"
                  components={[]}
                  values={{
                    amount: x.amount,
                    uid: x.uid,
                    ticket: x.ticket,
                  }}
                />
              </Typography>
            );
          })
        }
      </div>
    </div>
  );
};

export default PlaceBetSlip;
