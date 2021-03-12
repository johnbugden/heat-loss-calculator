import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartType } from 'angular-google-charts';
import { Meteostat } from 'meteostat';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Station, StationsService } from '../shared/weather/stations.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [StationsService]
})

export class MainComponent implements OnInit {
  // stationsForm: FormGroup = new FormGroup({});
  // historicalWeatherForm: FormGroup = new FormGroup({});
  // selectedWeather: any;
  // selectedWeatherGraph: any;
  // meteostat: any;

  constructor(public stations: StationsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }
}
