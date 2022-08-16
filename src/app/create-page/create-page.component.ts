import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { createUser } from '../apis/users';
import { CreateService } from '../apis/create.service';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css'],
})
export class CreatePageComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl('2000-01-01'),
  });

  users: createUser[] = [];

  async onSubmit(value: any) {
    console.log('submit called');
    console.log(value);
    this.setter(value);
    this.getter();
  }
  getter() {
    console.log('getter called');

    this.createService
      .getCreatedUsers()
      .subscribe((data: any) => (this.users = data));
  }
  setter(val: createUser) {
    this.createService
      .createUser(val)
      .subscribe((res) => console.log('Added Successfully'));
  }
  deleter(id: number) {
    this.createService
      .deleteUser(id)
      .subscribe((res) => console.log('Deleted Successfully'));
    this.getter();
  }
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public createService: CreateService
  ) {}

  ngOnInit(): void {
    this.getter();
    // this.myForm.valueChanges.subscribe(console.log);
  }
}
