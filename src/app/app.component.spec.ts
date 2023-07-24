import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the navigation bar and router outlet', () => {
    const compiled = fixture.nativeElement;
    const navBarElement = compiled.querySelector('um-nav-bar');
    const routerOutletElement = compiled.querySelector('router-outlet');

    expect(navBarElement).toBeTruthy();
    expect(routerOutletElement).toBeTruthy();
  });
});
