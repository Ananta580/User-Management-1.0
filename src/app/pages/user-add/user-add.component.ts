import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserModel } from './../../shared/models/user.model';
import { SharedModule } from './../../shared/shared.module';
import { UserStore } from './../../store/user.store';

@Component({
  selector: 'um-user-add',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-add.component.html',
})
export class UserAddComponent {
  userForm!: FormGroup;

  departmentList = ['Marketing', 'Management', 'Maintenance'];

  constructor(
    private userStore: UserStore,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      isAdmin: [false, Validators.required],
      department: ['', Validators.required],
    });
  }

  addUser() {
    if (this.userForm.invalid) {
      this.userForm.markAsTouched();
      this.userForm.markAsDirty();
      return;
    }
    this.userForm.markAsUntouched();
    const user: UserModel = this.userForm.value;
    this.userStore.addUser(user);
    this.router.navigateByUrl('/');
  }
}
