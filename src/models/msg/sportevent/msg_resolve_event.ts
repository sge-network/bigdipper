import { Categories } from '../types';

class MsgResolveEvent {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public ticket: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'sportevent';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.ticket = payload.ticket;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgResolveEvent({
      json,
      type: json['@type'],
      fromAddress: json.creator,
      ticket: json.ticket,
    });
  }
}

export default MsgResolveEvent;
