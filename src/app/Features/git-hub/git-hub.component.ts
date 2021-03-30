import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {

  markdown: string;

  constructor() { }

  ngOnInit(): void {
    this.markdown = `First line with two spaces after.  
    And the next line.
    
    First line with the HTML tag after.<br>
    And the next line.`
  }

}
