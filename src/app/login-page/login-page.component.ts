import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  login(uname: string, pwd: string) {
    sessionStorage.setItem('password', pwd);
    sessionStorage.setItem('username', uname);
    this.router.navigateByUrl('/dashboard').then(() => {
      window.location.reload();
    });
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
