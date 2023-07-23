import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStore } from 'src/app/store/user.store';
import { UserAddComponent } from './user-add.component';

describe('UserAddComponent', () => {
  const mockUserStore = {};

  let component: UserAddComponent;
  let fixture: ComponentFixture<UserAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserAddComponent],
      declarations: [],
      providers: [{ provide: UserStore, useValue: mockUserStore }],
    });
    fixture = TestBed.createComponent(UserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
