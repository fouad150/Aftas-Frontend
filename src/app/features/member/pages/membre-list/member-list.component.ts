import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MemberService} from "../../service/member.service";
import {Member} from "../../../../core/models/Member";
import {Ranking} from "../../../../core/models/Ranking";
import {ActivatedRoute} from "@angular/router";
import {RankingResponse} from "../../../../core/models/RankingResponse";


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit{
  members : Member[] =[];
  rankingsResponse: RankingResponse[]=[new RankingResponse()];
  competitionId:number=0;
  constructor( private route: ActivatedRoute,private memberService:MemberService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.competitionId = params['id'];
    });
    this.getCompetitionMembers();
    for (let i = 0; i < this.rankingsResponse.length; i++) {
      const member=this.rankingsResponse[i].member;
      this.members.push(member);
    }
    console.log(this.members);
  }
   getCompetitionMembers(): void{
    this.memberService.getCompetitionMembers(this.competitionId).subscribe((data: any)=>{
      this.rankingsResponse = data;
    });
  }




}

