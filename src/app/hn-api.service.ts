import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HNAPIService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://hacker-news.firebaseio.com/v0";
  }
  fetchStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`);
  }
  fetchItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`);
  }
}
