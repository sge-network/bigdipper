import { Categories } from '../types';

class MsgMutation {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public ticket: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'dvm';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.ticket = payload.ticket;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgMutation({
      json,
      type: json['@type'],
      fromAddress: json.creator,
      ticket: json.txs,
    });
  }
}

export default MsgMutation;
