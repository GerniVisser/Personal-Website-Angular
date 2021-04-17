import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl: string = "https://localhost:44300/api/Home/";

  constructor(private http: HttpClient) { }

  get(){
     this.http.get(this.baseUrl + "Get").subscribe(res => {
      console.log(res);
    })
  }
}
