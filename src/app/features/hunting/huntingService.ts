import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RankingResponse} from "../../core/models/RankingResponse";
import {Ranking} from "../../core/models/Ranking";
import {Hunting} from "../../core/models/Hunting";

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  private baseUrl = "http://localhost:8080/api/huntings";

  constructor(private http: HttpClient) {
  }

  createHunting(hunting: Hunting): Observable<Hunting> {
    return this.http.post<Hunting>(`${this.baseUrl}`, hunting);
  }

}
