import { Categories } from '../types';

class MsgWithdrawDelegatorIncentive {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public valAddress: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'incentivependulum';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.valAddress = payload.valAddress;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgWithdrawDelegatorIncentive({
      json,
      type: json['@type'],
      fromAddress: json.delegatorAddress,
      valAddress: json.validatorAddress,
    });
  }
}

export default MsgWithdrawDelegatorIncentive;
