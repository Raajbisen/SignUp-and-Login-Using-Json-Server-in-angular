import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http: HttpClient) { }


  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"

  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"

  sportsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"

  enterApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"




  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl);

  }

  techNews():Observable<any>{
    return this.http.get(this.techApiUrl);

  }
  sportsNews():Observable<any>{
    return this.http.get(this.sportsApiUrl);

  }

  enterNews():Observable<any>{
    return this.http.get(this.enterApiUrl);

  }


}
