import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Station } from '../stations.service';

@Component({
  selector: 'app-station-selector',
  templateUrl: './station-selector.component.html',
  styleUrls: ['./station-selector.component.scss']
})
export class StationSelectorComponent implements OnInit {
  selectedStation: Station | undefined;
  constructor(public dialogRef: MatDialogRef<StationSelectorComponent>,
     @Inject(MAT_DIALOG_DATA) public stations: any) {
     }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  selectStation(station: Station) {
    this.selectedStation = station;
  }

  saveStation() {
    this.dialogRef.close(this.selectedStation);
  }
}
