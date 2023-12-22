import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FishServiceService } from "../../service/fish-service.service";
import { Fish } from "../../../../core/models/Fish";
import {ActivatedRoute} from "@angular/router";
import {MemberService} from "../../../member/service/member.service";

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {
  fishes: Fish[] = [];
  competitionId:number=0;
  memberId:number=0;


  constructor( private route: ActivatedRoute,private fishService:FishServiceService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.competitionId = params['competitionId'];
      console.log("competitionId: "+this.competitionId);
      this.memberId=params['memberId'];
      console.log("memberId"+this.memberId);
    });
    this.getAllFishes();
  }

  private getAllFishes(): void {
    this.fishService.getAll().subscribe(
      (fishes: any) => {
        console.log('fishes =', fishes);
        this.fishes = fishes;
      },
      error => {
        console.log(error);
      }
    );
  }
}
