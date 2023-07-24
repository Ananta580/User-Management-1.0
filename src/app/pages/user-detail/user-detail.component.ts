import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserModel } from './../../shared/models/user.model';
import { SharedModule } from './../../shared/shared.module';
import { UserStore } from './../../store/user.store';

@Component({
  selector: 'um-user-detail',
  templateUrl: './user-detail.component.html',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
})
export class UserDetailComponent {
  userId = '';
  user$: Observable<UserModel | undefined> = new Observable();
  constructor(private _route: ActivatedRoute, private userStore: UserStore) {
    this.userId = this._route.snapshot.paramMap.get('userId') ?? '';
    if (this.userId) {
      this.getUser();
    }
  }

  getUser() {
    this.user$ = this.userStore
      .select((state) => state.userList)
      .pipe(
        map((userList) => userList.find((x) => x.id === Number(this.userId)))
      );
  }
}
