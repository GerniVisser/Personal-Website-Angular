import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../_Services/github.service';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {

  markdown: string;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    console.log("Hello");
    this.markdown = this.githubService.get();
  }

}
