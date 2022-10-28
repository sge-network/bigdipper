import { Categories } from '../types';

class MsgWithdrawValidatorIncentive {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'incentivependulum';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgWithdrawValidatorIncentive({
      json,
      type: json['@type'],
      fromAddress: json.validatorAddress,
    });
  }
}

export default MsgWithdrawValidatorIncentive;
