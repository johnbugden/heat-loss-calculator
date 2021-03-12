import { Component, OnInit } from '@angular/core';
import { StationsService } from 'src/app/shared/weather/stations.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  constructor(public stations: StationsService) {

   }

  ngOnInit(): void {
  }

}
