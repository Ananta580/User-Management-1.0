import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStore } from 'src/app/store/user.store';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  const mockUserStore = {};

  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserListComponent],
      declarations: [],
      providers: [{ provide: UserStore, useValue: mockUserStore }],
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
