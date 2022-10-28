import * as R from 'ramda';
import { Categories } from '../types';

class MsgDepositToSR {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public amount: MsgCoin[];
  public json: any;

  constructor(payload: any) {
    this.category = 'strategicreserve';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.amount = payload.amount;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgDepositToSR({
      json,
      type: json['@type'],
      fromAddress: json?.depositor_address,
      amount: [{
        denom: json?.amount?.denom,
        amount: R.pathOr('0', ['amount'], json?.amount),
      }],
    });
  }
}

export default MsgDepositToSR;
