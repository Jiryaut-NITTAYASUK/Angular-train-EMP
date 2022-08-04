import { Injectable } from '@angular/core';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  GetData(): Observable<any> {
    return this.http.get("http://localhost:8778/eyyController/getAllUser");
  }

  DeleteData(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8778/eyyController/deleteUserById?id=${id}`)
  }

}