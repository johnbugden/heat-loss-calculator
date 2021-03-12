import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StationsService } from 'src/app/shared/weather/stations.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  historicalWeatherForm: FormGroup;
  constructor(public stations:StationsService, private fb: FormBuilder) {
    this.historicalWeatherForm = this.fb.group({
      startDate: '2021-01-01',
      endDate: '2021-01-05',
      weatherType: 'daily'
    })
   }
   displayedColumns: string[] = ['date', 'tavg', 'tmin', 'tmax'];
  ngOnInit(): void {
  }
  changeTab(event: any) {
    console.log(event);
    if (event.index === 1) {
      this.stations.weatherChart.component!.draw()
    } else if (event.index === 2) {
      this.stations.weatherChartLow.component!.draw()
    }
  }

  changeChartType(chart: any) {
    if(chart.chartType === 'ColumnChart') {
      chart.chartType = 'LineChart';
    } else {
      chart.chartType = 'ColumnChart';
    }
    chart.component!.draw();
  }
  submitHistoricalWeatherForm() {
    this.stations.getHistoricalWeather(this.historicalWeatherForm.get('startDate')!.value, this.historicalWeatherForm.get('endDate')!.value, this.historicalWeatherForm.get('weatherType')!.value)
  }

}
