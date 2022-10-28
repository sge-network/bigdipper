import { Categories } from '../types';

class MsgPlaceBet {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public bet: BetPlaceFields;
  public json: any;

  constructor(payload: any) {
    this.category = 'bet';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.bet = payload.bet;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgPlaceBet({
      json,
      type: json['@type'],
      fromAddress: json.creator,
      bet: {
        uid: json.bet.uid,
        amount: [{
          denom: 'usge',
          amount: json?.bet.amount,
        }],
        ticket: json.bet.ticket,
      },
    });
  }
}

export default MsgPlaceBet;
