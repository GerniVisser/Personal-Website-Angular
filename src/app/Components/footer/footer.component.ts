import { Component, Input, OnInit } from '@angular/core';
import { OwnerInfoService } from './../../_Services/owner-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
