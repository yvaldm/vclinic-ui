import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {UserRegistration} from '../entity/user-registration';

@Component({templateUrl: 'registration.component.html'})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    // redirect to home if already logged in
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const userRegistration = new UserRegistration(this.email, 'pwd');
    this.userService.signup(userRegistration).subscribe(() => {
    });

    this.loading = true;
  }

  get email() {
    return this.registerForm.get('email').value;
  }
}



