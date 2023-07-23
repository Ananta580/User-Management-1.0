import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { UserModel } from '../shared/models/user.model';
import { intialUsers } from './user.init';

interface UserState {
  userList: UserModel[];
}

@Injectable()
export class UserStore extends ComponentStore<UserState> {
  // Observable to select all users
  readonly selectUserList$ = this.select((state) => state.userList);

  constructor() {
    super({
      userList: intialUsers,
    });
  }

  readonly addUser = this.updater((state: UserState, user: UserModel) => {
    // Assigning User Id by adding 1 to it.
    user.id = Math.max(...state.userList.map((user) => user.id)) + 1;

    return {
      ...state,
      userList: [...state.userList, user],
    };
  });
}
