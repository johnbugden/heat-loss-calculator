import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StationsService } from 'src/app/shared/weather/stations.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  stationsForm: FormGroup;
  dialog: any;
  constructor(public stations:StationsService, private fb: FormBuilder) {
    this.stationsForm = this.fb.group(
      {
        location: ''
      }
    )
   }

  ngOnInit(): void {

  }
  submitStationsForm() {
    const station = this.stationsForm.get('location')!.value;
    console.log('Searching For: ', station);
    if (this.stationsForm.valid) {
      this.stations.findStation(this.stationsForm.get('location')!.value);

    }
  }
}
