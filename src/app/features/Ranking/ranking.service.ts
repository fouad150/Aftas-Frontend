import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RankingResponse} from "../../core/models/RankingResponse";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private baseUrl = "http://localhost:8080/api/rankings";

  constructor(private http: HttpClient) {
  }

  getRankingsResult(competitionId: number): Observable<RankingResponse[]> {
    return this.http.get<RankingResponse[]>(`${this.baseUrl}` + `/${competitionId}`);
  }
}
