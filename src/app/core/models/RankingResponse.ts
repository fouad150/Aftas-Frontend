import {MemberDTO} from "./MemberDTO";
import {Member} from "./Member";
import {CompetitionDTO} from "./CompetitionDTO";

export class RankingResponse{
/*
  id: number;
*/
  memberRank: number;
  score: number;
  member: Member;
  competitionDTO: CompetitionDTO;
  constructor(/*id?: number,*/rank?:number,score?:number, member?: Member, competitionId?: number) {
    this.memberRank = rank || 0;
    this.score=score||0;
    this.member = member || new Member();
    this.competitionDTO= new CompetitionDTO() || 0;
  }
}
