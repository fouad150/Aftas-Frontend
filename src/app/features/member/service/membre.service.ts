import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../../../core/models/Member";

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private membreService: MembreService) { }
   getAll(): Observable<Member[]>{
    return this.membreService.getAll<Member[]>('/api/members')
  }
}
