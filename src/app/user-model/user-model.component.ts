import { Component, createPlatform, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-model',
  templateUrl: './user-model.component.html',
  styleUrls: ['./user-model.component.css']
})
export class UserModelComponent implements OnInit {

  form = new FormGroup<any>({});

  constructor( 
    private fb: FormBuilder,
    private userService: UserServiceService,
  ) { }

  ngOnInit(): void {
    this.form = this.createInsertForm();
  }

  createInsertForm(){
    return this.fb.group({
      name: [""],
      lastname: [""],
      birthday: [""],
      age: [""],
      gender: [""],
      createdBy: ["Eyy"],
      updatedBy: ["Eyy"],
    })
  }

  save() {
    console.warn(this.form.value);
    this.userService.InsertData(this.form.value).subscribe((res: any) =>{
      console.log("insert:", res);
      window.location.reload();    
    })
  }
}