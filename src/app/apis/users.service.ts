import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Raw } from './users';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiServer = 'https://reqres.in/api/users?page=2';
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<Raw> {
    return this.httpClient
    .get<Raw>(this.apiServer)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error:any){
    let errorMessage = '';

  if (error.error instanceof ErrorEvent) {

   // Get client-side error

   errorMessage = error.error.message;

  } else {

   // Get server-side error

   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

  }

  console.log(errorMessage);

  return throwError(errorMessage);
  }
}
