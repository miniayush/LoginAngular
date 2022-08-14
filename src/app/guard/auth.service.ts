import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn():boolean{
    if (sessionStorage.getItem('username') == null){
      return false
    }
    return true;
  }
  constructor() { }
}
