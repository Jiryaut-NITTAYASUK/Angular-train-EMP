import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UserServiceService } from '../user-service.service';
import { UserModelComponent } from '../user-model/user-model.component';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  form = new FormGroup<any>({});

  title!: string;
  datas: any;
  id!: number;
  searchType: any;
  searchInput: any;
  

  constructor(private userService: UserServiceService, 
              private dialog: MatDialog,
              private fb: FormBuilder,
              ) 
              {
          
              }

  ngOnInit(): void {
    this.title = 'Staff Management Table';
    this.getData();
    this.form = this.createSearchForm();
  }

  openDialog(): void {
    this.dialog.open(UserModelComponent)
  } 

  createSearchForm(){
    return this.fb.group({
      searchType: [""],
      searchInput: [""],
    })
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

  search() {
    console.log("Search By",this.form.value.searchType, this.form.value.searchInput)
    switch (this.form.value.searchType) {
      case "ID":
        this.userService.SearchById(this.form.value.searchInput).subscribe((response:any ) => {
          this.datas = response;
          console.log(this.datas);
        })
        break;
    }
  }

}