
export  class Hunting{
  /*numberOfFish: number;*/
  fishWeight:number;
  competitionId: number;
  fishId: number;
  memberId: number;
  constructor(fishWeight?:number, competitionId?:number,fishId?:number,memberId?:number) {
    this.fishWeight=fishWeight||0;
    this.competitionId=competitionId||0;
    this.fishId=fishId||0;
    this.memberId=memberId||0;
  }

}
