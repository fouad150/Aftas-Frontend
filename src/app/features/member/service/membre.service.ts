import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http : HttpClient) { }
  public getAll(){
    return
  }
}
