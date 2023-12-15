import {Competition} from "./Competition";
import {Fish} from "./Fish";
import {Member} from "./Member";

export  interface Hunting{
  id: number;
  numberOfFish: number;
  competition: Competition;
  fish: Fish;
  member: Member;
}
