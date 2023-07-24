import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { intialUsers } from './../../store/user.init';
import { UserStore } from './../../store/user.store';
import { UserDetailComponent } from './user-detail.component';
describe('UserDetailComponent', () => {
  const mockUserStore = {
    select: (selectorFn: (state: any) => any) => {
      return of(selectorFn({ intialUsers }));
    },
  };

  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserDetailComponent, RouterTestingModule],
      providers: [
        { provide: UserStore, useValue: mockUserStore },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } },
        },
      ],
    });
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set userId based on the route parameter', () => {
    expect(component.userId).toBe('1');
  });

  it('should call getUser() method and populate user$ with the correct user', () => {
    const user = intialUsers[0];

    component.getUser();

    fixture.detectChanges();

    component.user$.subscribe((result) => {
      expect(result).toEqual(user);
    });
  });
});
