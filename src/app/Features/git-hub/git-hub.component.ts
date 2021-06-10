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

  repoID: string;
  repoData: any;
  markdown: string;
  pageLink: string;
  

  constructor(private githubService: GithubService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getRepoID();


    this.pageLink = "https://github.com/jaime-olivares/zipstorer";
    this.markdown;
    
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
      console.log(res);
      
    })
  }

}
