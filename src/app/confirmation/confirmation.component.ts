import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  confirmationForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.confirmationForm = this.formBuilder.group({
      email: ['', Validators.required],
      code: ['', Validators.required]
    });
  }

  get f() {
    return this.confirmationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.confirmationForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService.confirm(this.email, this.code).subscribe(() => {
    });

    this.loading = false;
  }

  get email() {
    return this.confirmationForm.get('email').value;
  }

  get code() {
    return this.confirmationForm.get('code').value;
  }
}
