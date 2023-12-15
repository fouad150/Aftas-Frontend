import {Member} from "./Member";
import {Competition} from "./Competition";

export interface Ranking{
  id: number;
  rank: number;
  score: number;
  member: Member;
  competition: Competition;
}
