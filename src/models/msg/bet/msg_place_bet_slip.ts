import { Categories } from '../types';

class MsgPlaceBetSlip {
  public category: Categories;
  public type: string;
  public fromAddress: string;
  public bets: BetPlaceFields[];
  public json: any;

  constructor(payload: any) {
    this.category = 'bet';
    this.type = payload.type;
    this.fromAddress = payload.fromAddress;
    this.bets = payload.bets;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgPlaceBetSlip({
      json,
      type: json['@type'],
      fromAddress: json.creator,
      bets: json?.bets.map((x) => {
        return {
          uid: x?.uid,
          amount: [{
            denom: 'usge',
            amount: x.amount,
          }],
          ticket: x?.ticket,
        };
      }),
    });
  }
}

export default MsgPlaceBetSlip;
