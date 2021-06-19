import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../_Services/github.service';
import { OwnerInfoService } from './../../_Services/owner-info.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  repos : any;
  mailingInfo : any;

  constructor(private githubService: GithubService, private ownerInfo: OwnerInfoService) { }

  ngOnInit(): void {
    this.mailingInfo = this.ownerInfo.getMailingInfo();
    console.log(this.mailingInfo);
    

    this.githubService.getReposSummary("GerniVisser").subscribe(res =>{
      this.repos = res;
    })
  }

}
