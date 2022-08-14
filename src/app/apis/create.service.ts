import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { createUser } from './users';
@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private httpServer = 'http://localhost:3000/users'

  constructor(private httpClient:HttpClient) { }

  getCreatedUsers(): Observable<createUser>{
    return this.httpClient
    .get<any>(this.httpServer)
    .pipe(catchError(this.errorHandler))
  }
  createUser(data:createUser){
    return this.httpClient.post(this.httpServer,data)
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
