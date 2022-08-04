import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserServiceService } from '../user-service.service';
import { UserModelComponent } from '../user-model/user-model.component';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  title!: string;
  datas: any;
  id!: number;

  constructor(private userService: UserServiceService, 
              private dialog: MatDialog,
              ) { }

  ngOnInit(): void {
    this.title = 'Staff Management Table';
    this.getData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserModelComponent)
  }
  

// Service
  getData() {
    this.userService.GetData().subscribe((response:any) => 
      {
        console.log(response) 
        this.datas = response;
      }
    );
  }

  deleteData(id: number) {
    this.userService.DeleteData(id).subscribe(() =>
      {
        console.log("Data Deleted")
        this.getData()
      }
    );
  }

}