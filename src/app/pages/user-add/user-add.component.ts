import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserStore } from 'src/app/store/user.store';

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
  userList$: Observable<UserModel[]> = new Observable();

  constructor(private userStore: UserStore, private fb: FormBuilder) {
    this.userList$ = this.userStore.selectUserList$;

    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      isAdmin: [false, Validators.required],
      department: ['', Validators.required],
    });
  }

  addUser() {
    console.log(this.userForm.value);
  }
}
