import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/user-list/user-list.component').then(
        (c) => c.UserListComponent
      ),
  },

  {
    path: 'details/:userId',
    loadComponent: () =>
      import('./pages/user-detail/user-detail.component').then(
        (c) => c.UserDetailComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
