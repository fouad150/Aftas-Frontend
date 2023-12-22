import {Member} from "./Member";
import {Competition} from "./Competition";
import {MemberDTO} from "./MemberDTO";

export class Ranking{
  /*id: number;*/
  /*rank: number;
  score: number;*/
  memberDTO: MemberDTO;
  competitionId: number;
  constructor(/*id?: number,*/ memberDTO?: MemberDTO, competitionId?: number) {
    /*this.id = id || 0;*/
    this.memberDTO = memberDTO || new MemberDTO();
    this.competitionId = competitionId || 0;
  }
}
