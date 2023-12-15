import {Ranking} from "./Ranking";
import {Hunting} from "./Hunting";

export interface Competition{
  id: number;
  code: string;
  date: Date;
  startTime: string;
  endTime: string;
  numberOfParticipants: number;
  location: string;
  amount: number;
  rankings: Ranking[];
  hangings: Hunting[]
}
