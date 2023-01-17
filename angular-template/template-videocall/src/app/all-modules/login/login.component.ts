import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: any;
  show = false;

  constructor(public router: Router) { }
  direction() {
    this.router.navigate(['/dashboard']);
  }
  ngOnInit(): void {
    this.password = 'password';
    var app = document.getElementsByTagName("BODY")[0];
    app.classList.remove("darkmode");
    app.classList.remove("darkcall");
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
