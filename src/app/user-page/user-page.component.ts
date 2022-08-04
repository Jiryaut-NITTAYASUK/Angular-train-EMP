import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  title!: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'user-page';
  }

}