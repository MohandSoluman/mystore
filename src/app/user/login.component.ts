import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string | undefined;
  pageTitle = 'Log In';

  constructor(private router: Router) { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;

      // Navigate to the Product List page after log in.
      this.router.navigate(['/products']);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
