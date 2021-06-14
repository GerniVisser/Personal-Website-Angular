import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../_Services/github.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {

  isLoaded:boolean = false;

  repoID: string;
  repoData: any ;
  markdown: string;
  pageLink: string;
  dateUpdated: Date;
  

  constructor(private githubService: GithubService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getRepoID();
    
  }

  getRepoID() {
    this.route.params.subscribe(prams => {
      this.repoID = prams.id;
      this.getRepoData("GerniVisser",this.repoID)
    })
  }

  getRepoData(username:string, repoID:string){
    this.githubService.getRepoData(username,repoID).subscribe(res =>{
      this.repoData = res;
      this.markdown = atob(res.content);
      this.pageLink = res.url;
      this.dateUpdated = new Date(res.updated_at);
      
      this.isLoaded = true;
    })
  }
}
