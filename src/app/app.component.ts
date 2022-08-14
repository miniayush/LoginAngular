import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uname:string = (sessionStorage.getItem('username') || 'anonymous');
  Uname = this.uname.charAt(0).toUpperCase() + this.uname.slice(1);
  title = 'LoginAngular';
  async logout(){
    await sessionStorage.clear();
    window.location.reload();
  }
}
