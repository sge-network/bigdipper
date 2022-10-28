import { Categories } from '../types';

class MsgSettleBet {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public uid: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'bet';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.uid = payload.uid;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSettleBet({
      json,
      type: json['@type'],
      fromAddress: json.creator,
      uid: json.bet_uid,
    });
  }
}

export default MsgSettleBet;
