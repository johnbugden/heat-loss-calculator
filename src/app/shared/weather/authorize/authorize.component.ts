import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss'],
  providers: []
})
export class AuthorizeComponent implements OnInit {
  key=""
  constructor(public dialogRef: MatDialogRef<AuthorizeComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) {
     }

 ngOnInit(): void {
 }
 onNoClick(): void {
  this.dialogRef.close();
}

 saveAuthorization() {
   this.dialogRef.close(this.key);

 }

}
