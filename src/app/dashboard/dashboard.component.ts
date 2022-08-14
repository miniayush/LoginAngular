import { Component, OnInit } from '@angular/core';
import { Raw, Users } from '../apis/users';
import { UsersService } from '../apis/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: Users[] = [];
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((raw: Raw) => {
      this.users = raw.data;
      // console.log('User', this.users);
    });
  }
}
