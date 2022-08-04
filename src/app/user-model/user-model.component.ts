import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-model',
  templateUrl: './user-model.component.html',
  styleUrls: ['./user-model.component.css']
})
export class UserModelComponent implements OnInit {
  
  // constructor( public dialogRef: MatDialogRef<UserModelComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any, ) {}

  ngOnInit(): void {
  }

  closeDialog(): void {
    // const dialogRef = this.dialogRef.close()
  }
}