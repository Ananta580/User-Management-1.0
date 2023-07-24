import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the type and size input properties', () => {
    component.type = 'primary';
    component.size = 'lg';
    fixture.detectChanges();

    expect(component.type).toBe('primary');
    expect(component.size).toBe('lg');
  });

  it('should emit OnClick event when the button is clicked', () => {
    const emitSpy = jest.spyOn(component.OnClick, 'emit');
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    buttonElement.click();

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit OnFocus event when the button is focused', () => {
    const emitSpy = jest.spyOn(component.OnFocus, 'emit');
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    buttonElement.dispatchEvent(new FocusEvent('focus'));

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit OnBlur event when the button loses focus', () => {
    const emitSpy = jest.spyOn(component.OnBlur, 'emit');
    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    buttonElement.dispatchEvent(new FocusEvent('blur'));

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });
});
