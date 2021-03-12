import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meteostat, Name } from 'meteostat';
import { GoogleChartInterface } from 'ng2-google-charts';
import { AuthorizeComponent } from './authorize/authorize.component';
import { StationSelectorComponent } from './station-selector/station-selector.component';

@Injectable()
export class StationsService {
  public meteostat?: Meteostat
  selectedStation: Station = {
    active: true,
  country: "US",
  elevation: 75,
  iata: '',
  icao: "KIJD",
  id: "KIJD0",
  latitude: 41.744,
  longitude: -72.1802,
  name:{en: "Willimantic / Mansfield Hollow"},
  region: "CT",
  timezone: "America/New_York",
  national: '',
  wmo: 0
  };
  stationsFound: any
  selectedWeather: any;
  public weatherChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [['Date', 'Average Temperature']],
    //firstRowIsData: true,
    options: { 'title': 'Average Temperature Over Time', 'height': 800, 'curveType': 'function' },
  };

  public weatherChartLow: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [['Date', 'Low Temperature']],
    //firstRowIsData: true,
    options: { 'title': 'Low Temperature Over Time', 'height': 800, 'curveType': 'function' },
  };

  constructor(public dialog: MatDialog) {
    // this.meteostat = new Meteostat('knSxtb7XcMuzVJuL8WHiIIV7CYVgTxiC');
  }

  public authorize(token: string) {
    this.meteostat = new Meteostat(token);
  }

  public async findStation(location: string) {
    if (this.meteostat) {
      try {
        const data = await this.meteostat.stations.search({ query: location })
        this.stationsFound = data.data;
        const dialogRef = this.dialog.open(StationSelectorComponent, {
          width: '1000px',
          data: data
        });
        dialogRef.afterClosed().subscribe((result: any) => {
          console.log('The dialog was closed');
          this.setStation(result);
        })
        return data
      } catch (error) {
        console.log(error)
        return 'Not found'
      }
    } else {
      return 'Not authorized'
    }
  }

  public setStation(station: Station) {
    this.selectedStation = station;
    console.debug('Selected Station ', station);
  }
  public async getHistoricalWeather(startDate: string, endDate: string, weatherType: 'daily' | 'hourly') {
    if (this.meteostat && this.selectedStation) {
      try {
        const data = await this.meteostat.stations[weatherType]({
          station: this.selectedStation?.id,
          start: startDate,
          end: endDate,
        });
        this.selectedWeather = data.data;
        this.selectedWeather.forEach((element: { date: any; tavg: any; tmin: any; }) => {
          this.weatherChart.dataTable.push([element.date, element.tavg]);
          this.weatherChartLow.dataTable.push([element.date, element.tmin]);
        });
        console.log(this.weatherChart);
        let ccComponent = this.weatherChart.component;
        let ccWrapper = ccComponent!.wrapper;
        ccComponent?.draw();
        let ccComponentLow = this.weatherChartLow.component;
        let ccWrapperLow = ccComponentLow!.wrapper;
        ccComponentLow?.draw();
        // this.selectedWeatherGraph = data.data
        console.log(data);
        return data
      } catch (error) {
        console.log(error)
        return 'Not found'
      }
    } else {
      return console.error('Not authorized');
    }
  }
  authorizeMeteostat() {
    const data = '';
    const dialogRef = this.dialog.open(AuthorizeComponent, {
      width: '1000px',
      data: data
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.authorize(result);
    })
  }
}

export interface Station {
  id: string;
  name: Name;
  country: string;
  region: string;
  national: string;
  wmo: number;
  icao: string;
  iata: string;
  latitude: number;
  longitude: number;
  elevation: number;
  timezone: string;
  active: boolean;
}
