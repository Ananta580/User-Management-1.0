import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { intialUsers } from './../../store/user.init';
import { UserStore } from './../../store/user.store';
import { UserListComponent } from './user-list.component';
describe('UserListComponent', () => {
  const mockUserStore = {
    selectUserList$: of(intialUsers),
  };

  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserListComponent, RouterTestingModule],
      providers: [{ provide: UserStore, useValue: mockUserStore }],
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize userList$ with userStore.selectUserList$', () => {
    expect(component.userList$).toEqual(mockUserStore.selectUserList$);
  });

  it('should render the list of users', () => {
    const compiled = fixture.nativeElement;
    const userListItems = compiled.querySelectorAll('.user-list-item');
    expect(userListItems.length).toBe(2);
  });
});
