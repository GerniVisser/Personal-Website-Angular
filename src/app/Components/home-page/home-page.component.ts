import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubService } from 'src/app/_Services/github.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  images = [
    "PxmcV87q/Gerni-1.png",
    "mr1KMnNC/Gerni-2.png",
    "k4fZddnr/Gerni-Stable-Diffusion-2.png",
    "pdQ4qF4L/Gerni-Stable-Diffusion-9.png",
    "CxqWnt4D/Gerni-Stable-Diffusion-8.png",
  ].map((n) => `https://i.postimg.cc/${n}`);

  isLoaded:boolean = false;

  repos : any;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getReposSummary("GerniVisser").subscribe(res =>{
      this.repos = res;

      this.isLoaded = true;
    })
  }

}
