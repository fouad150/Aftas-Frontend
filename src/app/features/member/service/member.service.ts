import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../../../core/models/Member";
import {ApiService} from "../../../core/service/api.service";
import {Competition} from "../../../core/models/Competition";
import {Ranking} from "../../../core/models/Ranking";
import {RankingResponse} from "../../../core/models/RankingResponse";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private rankingUrl = "http://localhost:8080/api/rankings";
  private baseUrl="http://localhost:8080/api/members";

  constructor(private http: HttpClient) { }

  getCompetitionMembers(competitionId:number): Observable<RankingResponse[]>{
    return this.http.get<RankingResponse[]>(`${this.rankingUrl}`+`/${competitionId}`);
  }

  createRanking(ranking: Ranking): Observable<Ranking> {
    return this.http.post<Ranking>(`${this.rankingUrl}`, ranking);
  }

  create(member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.baseUrl}`, member);
  }

  update(member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/${member.id}`, member);
  }
  delete(memberId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${memberId}`);
  }

}
