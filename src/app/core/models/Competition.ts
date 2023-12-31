import {Ranking} from "./Ranking";
import {Hunting} from "./Hunting";

export class Competition{
  id: number;
  code: string;
  date: Date;
  startTime: string;
  endTime: string;
  numberOfParticipants: number;
  location: string;
  amount: number;
  status:string;
 /* rankings: Ranking[];
  hangings: Hunting[]*/

  constructor() {
    this.id = 0;
    this.code = '';
    this.date = new Date();
    this.startTime = '';
    this.endTime = '';
    this.numberOfParticipants = 0;
    this.location = '';
    this.amount = 0;
    this.status='';
  }
}
