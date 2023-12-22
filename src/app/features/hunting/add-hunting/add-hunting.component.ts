import { Component } from '@angular/core';
import {HuntingService} from "../huntingService";
import {ActivatedRoute} from "@angular/router";
import {Hunting} from "../../../core/models/Hunting";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hunting',
  templateUrl: './add-hunting.component.html',
  styleUrls: ['./add-hunting.component.css']
})
export class AddHuntingComponent {
  private competitionId:number=0;
  private memberId:number=0;
  private fishId:number=0;
  public fishWeight:number=0;

  private hunting:Hunting=new Hunting();
  constructor(private route: ActivatedRoute, private router: Router,private huntingService:HuntingService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.competitionId = params['competitionId'];
      this.memberId=params['memberId'];
      console.log(params['memberId']);
      this.fishId=params['fishId'];
    });
  }

  create(){
    const hunting=new Hunting(this.fishWeight,this.competitionId,this.fishId,this.memberId);
    console.log(hunting);
    this.huntingService.createHunting(hunting).subscribe  ({
      next: data => {
        this.hunting=data;
        console.log(data);
        this.router.navigate(['/Competition-list']);
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
