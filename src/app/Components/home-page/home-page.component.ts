import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubService } from 'src/app/_Services/github.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  image = "../../../assets/Images/test1.png";

  isLoaded:boolean = false;

  repos : any;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getReposSummary("GerniVisser").subscribe(res =>{
      this.repos = res;

      this.isLoaded = true;
    })
  }

}
