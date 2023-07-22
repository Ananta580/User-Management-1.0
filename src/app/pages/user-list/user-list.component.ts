import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'um-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  mockUsers: UserModel[] = [
    {
      id: 1,
      firstName: 'Lara',
      lastName: 'Dutta',
      isAdmin: false,
      userName: 'lara550',
      department: 'Management',
    },
    {
      id: 2,
      firstName: 'Alan',
      lastName: 'Hinder',
      isAdmin: true,
      userName: 'alan550',
      department: 'Maintenance',
    },
  ];
}
