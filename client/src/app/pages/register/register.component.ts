import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export default class RegisterComponent implements OnInit {

  fb = inject(FormBuilder);
  registerForm !: FormGroup

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })
  }

  register(){

  }
}
