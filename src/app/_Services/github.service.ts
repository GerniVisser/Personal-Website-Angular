import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl: string = "https://localhost:44300/api/Home/Get";

  constructor(private http: HttpClient) { }

  get():any{
     this.http.get(this.baseUrl).subscribe(res => {
      return res
    }, error => console.log(error))
  }
}
