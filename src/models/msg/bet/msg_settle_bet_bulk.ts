import { Categories } from '../types';

class MsgSettleBetBulk {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public betUids: string[];
  public json: any;

  constructor(payload: any) {
    this.category = 'bet';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.betUids = payload.bet_uids;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSettleBetBulk({
      json,
      type: json['@type'],
      fromAddress: json.creator,
      betUids: json.bet_uids,
    });
  }
}

export default MsgSettleBetBulk;
