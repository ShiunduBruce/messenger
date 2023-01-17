import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password = 'password';
  show1 = false;

  confirmPassword = 'password';
  show2 = false;


  constructor(public router: Router) { }
  direction() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    var app = document.getElementsByTagName("BODY")[0];
    app.classList.remove("darkmode");
    app.classList.remove("darkcall");
  }

  onClick(type: string) {
    if (type === 'password') {
      if (this.password === 'password') {
        this.password = 'text';
        this.show1 = true;
      } else {
        this.password = 'password';
        this.show1 = false;
      }
    } else {
      if (this.confirmPassword === 'password') {
        this.confirmPassword = 'text';
        this.show2 = true;
      } else {
        this.confirmPassword = 'password';
        this.show2 = false;
      }
    }

  }
}
