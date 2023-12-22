import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Member} from "../../../../core/models/Member";
import {MemberService} from "../../service/member.service";
import {ActivatedRoute} from "@angular/router";
import {Ranking} from "../../../../core/models/Ranking";
import {MemberDTO} from "../../../../core/models/MemberDTO";

@Component({
  selector: 'app-member-add-edit',
  templateUrl: './member-add-edit.component.html',
  styleUrls: ['./member-add-edit.component.css']
})
export class MemberAddEditComponent implements OnInit{
/*
  public memberForm!:FormGroup;
*/
  public competitionId:number=-1;
  public member:Member=new Member();
  public ranking:Ranking=new Ranking();
  public memberDTO:MemberDTO=new MemberDTO();
  constructor( private route: ActivatedRoute,private memberService:MemberService/*,private fb: FormBuilder*//*, private memberService: MembreService*/) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.competitionId = params['id'];
    });
  }
  create(){
    this.memberDTO=new MemberDTO(this.member.number,this.member.firstName,this.member.lastName,this.member.accessionDate,this.member.nationality,this.member.identityDocument.toString(),this.member.identityNumber);
    this.ranking=new Ranking(this.memberDTO,this.competitionId);
    this.memberService.createRanking(this.ranking).subscribe({
      next: data => {
        alert(JSON.stringify(data));
        this.ranking=data;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
