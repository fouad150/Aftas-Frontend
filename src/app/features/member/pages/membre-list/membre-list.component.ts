import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit{
  members : Array<any> =[];
  constructor(private http:HttpClient) {
  }


  ngOnInit(): void {
    this.http.get<Array<any>>("")
      .subscribe({next :data =>this.members = data})
  }
}
