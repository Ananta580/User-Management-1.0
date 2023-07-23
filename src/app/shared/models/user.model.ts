export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  isAdmin: boolean;
  department: 'Marketing' | 'Management' | 'Maintenance';
}
