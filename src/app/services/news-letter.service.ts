import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsLetterService {

  constructor(private http: HttpClient) { }

  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=1197ef94a4d942028be0d2a22b2cc02f'

  topHeading(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }


  techNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1197ef94a4d942028be0d2a22b2cc02f'

  techNews():Observable<any> {
    return this.http.get(this.techNewsApiUrl);
  }

  
  businessNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1197ef94a4d942028be0d2a22b2cc02f'

  businessNews():Observable<any> {
    return this.http.get(this.businessNewsApiUrl)
  }

}
