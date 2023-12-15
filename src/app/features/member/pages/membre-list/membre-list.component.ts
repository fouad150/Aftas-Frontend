import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MembreService} from "../../service/membre.service";
import {Member} from "../../../../core/models/Member";

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit{
  members : Member[] =[];
  constructor(private http:HttpClient, private memberService : MembreService) {
  }

  ngOnInit(): void {
    this.loadMember()
  }
  private loadMember(): void{
    this.memberService.getAll().subscribe(members=>{
      console.log("members =", members)
      this.members = members;
    });
  }




}

