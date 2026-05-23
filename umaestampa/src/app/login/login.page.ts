import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  isLogin: boolean = true;
  email: string = '';
  password: string = '';
  username: string = '';
  showPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
