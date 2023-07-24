import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from './../../shared/models/user.model';
import { SharedModule } from './../../shared/shared.module';
import { UserStore } from './../../store/user.store';

@Component({
  selector: 'um-user-list',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  userList$: Observable<UserModel[]> = new Observable();

  constructor(private userStore: UserStore) {
    this.userList$ = this.userStore.selectUserList$;
  }
}
