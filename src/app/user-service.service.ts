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

  InsertData(data: any): Observable<any> {
    return this.http.post<any>("http://localhost:8778/eyyController/insertUser", data);
  }

  SearchById(userId: number): Observable<any> {
    return this.http.get(`http://localhost:8778/eyyController/getUserByID?userId=${userId}`)
  }

  SearchByName(name: string): Observable<any> {
    return this.http.get(`http://localhost:8778/eyyController/getUserByName?name=${name}`)
  }
  
  SearchByLastname(lastname: string): Observable<any> {
    return this.http.get(`http://localhost:8778/eyyController/getUserByLastname?lastname=${lastname}`)
  }

  SearchByAge(age: number): Observable<any> {
    return this.http.get(`http://localhost:8778/eyyController/getUserByAge?age=${age}`)
  }
  
  SearchByBirthday(date: string): Observable<any> {
    return this.http.get(`http://localhost:8778/eyyController/getUserByBirthday?birthday=${date}`)
  }

  SearchByGender(gender: string): Observable<any> {
    return this.http.get(`http://localhost:8778/eyyController/getUserByGender?gender=${gender}`)
  }
}