import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formSignup = this.formBuilder.group(
    {
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
      role: [''],
    },
    { validators: this.checkPassword }
  );
  constructor(
    private formBuilder: FormBuilder,
    private authServices: AuthService
  ) {}

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }
  onSubmit() {
    if (this.formSignup.invalid) {
      return;
    }
    this.authServices.signup(this.formSignup.value).subscribe((data) => {
      console.log(data);
    });
  }
}
