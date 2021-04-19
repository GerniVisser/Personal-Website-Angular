import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl: string = "https://localhost:44300/api/Github";

  constructor(private http: HttpClient) { }

  getRepo(name: string):any{
     this.http.get(this.baseUrl + "/Get/" + name).subscribe(res => {
      return res
    }, error => console.log(error))
  }
} 

