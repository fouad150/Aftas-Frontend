import { Injectable } from '@angular/core';
import { ApiService } from "../../../core/service/api.service";
import { Observable } from "rxjs";
import { Fish } from "../../../core/models/Fish";
import {HttpClient} from "@angular/common/http";
import {RankingResponse} from "../../../core/models/RankingResponse";

@Injectable({
  providedIn: 'root'
})
export class FishServiceService {

  private baseUrl="http://localhost:8080/api/fishes";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Fish[]>{
    return this.http.get<Fish[]>(`${this.baseUrl}`);
  }
}
