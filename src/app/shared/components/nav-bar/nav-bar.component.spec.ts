import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the template correctly', () => {
    const compiled = fixture.nativeElement;

    const navBarElement = compiled.querySelector('.h-12');
    expect(navBarElement).toBeTruthy();

    const imgElement = compiled.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain(
      'https://seeklogo.com/images/C/chainlink-link-logo-CDF7095A43-seeklogo.com.png'
    );

    const h1Element = compiled.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toBe('UM 1.0');
  });
});
