import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MemberService} from "../../member/service/member.service";
import {RankingService} from "../ranking.service";
import {RankingResponse} from "../../../core/models/RankingResponse";

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent {
  private competitionId:number=0;
  public rankingsResult:RankingResponse[]=[new RankingResponse()];

  constructor( private route: ActivatedRoute,private rankingService:RankingService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.competitionId = params['id'];
    });
    this.getRankingsResult();
    /*for (let i = 0; i < this.rankingsResult.length; i++) {
      const member=this.rankingsResponse[i].member;
      this.members.push(member);
    }*/
  }
  getRankingsResult(): void{
    this.rankingService.getRankingsResult(this.competitionId).subscribe((data: any)=>{
      this.rankingsResult = data;
      console.log(this.rankingsResult);
    });
  }
}
