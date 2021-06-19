import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/_Services/github.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isLoaded:boolean = false;

  repos : any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getReposSummary("GerniVisser").subscribe(res =>{
      this.repos = res;

      this.isLoaded = true;
    })
  }

}
