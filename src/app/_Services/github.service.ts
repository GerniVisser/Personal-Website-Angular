import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl: string = "https://localhost:5001/api/Home";

  constructor(private http: HttpClient) { }

  get(data: any){
    return this.http.post(this.baseUrl + "Get", data);
  }
}
