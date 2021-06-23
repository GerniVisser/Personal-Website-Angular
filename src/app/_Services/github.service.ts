import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl: string = "m/api/github";

  constructor(private http: HttpClient) { }

  getReposSummary(username: string):any{
    return this.http.get(this.baseUrl + "/Repos/Summary/" + username)
 }

  getRepoData(username: string, reponame: string):any{
    return this.http.get(this.baseUrl + "/Repos/RepoData/" + username + "/" + reponame)
  }
} 

