import { UserModel } from 'src/app/shared/models/user.model';
export const intialUsers: UserModel[] = [
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
