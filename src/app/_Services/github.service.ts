import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl: string = "https://localhost:44300/api/Github";

  constructor(private http: HttpClient) { }

  getReposSummary(username: string):any{
    return this.http.get(this.baseUrl + "/Repos/Summary/" + username)
 }

  getRepoData(username: string, reponame: string):any{
    return this.http.get(this.baseUrl + "/Repos/RepoData/" + username + "/" + reponame)
  }
} 

