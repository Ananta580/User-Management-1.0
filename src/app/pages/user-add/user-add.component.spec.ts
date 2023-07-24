import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { intialUsers } from './../../store/user.init';
import { UserStore } from './../../store/user.store';
import { UserAddComponent } from './user-add.component';
describe('UserAddComponent', () => {
  const mockUserStore = {
    addUser: jest.fn(),
  };

  const mockRouter = {
    routerState: { root: '' },
    navigateByUrl: jest.fn(),
  };

  let component: UserAddComponent;
  let fixture: ComponentFixture<UserAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        UserAddComponent,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: UserStore, useValue: mockUserStore },
        { provide: Router, useValue: mockRouter },
      ],
    });
    fixture = TestBed.createComponent(UserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the userForm with required form controls', () => {
    expect(component.userForm.get('firstName')).toBeDefined();
    expect(component.userForm.get('lastName')).toBeDefined();
    expect(component.userForm.get('userName')).toBeDefined();
    expect(component.userForm.get('isAdmin')).toBeDefined();
    expect(component.userForm.get('department')).toBeDefined();
  });

  it('should add a user when addUser() is called with a valid form', () => {
    const mockUser = intialUsers[0];
    component.userForm.patchValue({
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
      userName: mockUser.userName,
      isAdmin: mockUser.isAdmin,
      department: mockUser.department,
    });

    component.addUser();

    expect(mockUserStore.addUser).toHaveBeenCalled();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should not add a user when addUser() is called with an invalid form', () => {
    component.addUser();
    expect(mockUserStore.addUser).not.toHaveBeenCalled();

    expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
  });
});
