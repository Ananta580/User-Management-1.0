import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set input properties correctly', () => {
    component.type = 'number';
    component.label = 'Age';
    component.placeholder = 'Enter your age';
    component.disabled = true;
    fixture.detectChanges();

    expect(component.type).toBe('number');
    expect(component.label).toBe('Age');
    expect(component.placeholder).toBe('Enter your age');
    expect(component.disabled).toBe(true);
  });

  it('should update the value and emit changes on handleChange', () => {
    const mockValue = 'Test value';
    const emitSpy = jest.spyOn(component.handleOnChange, 'emit');

    component.handleChange(mockValue);

    expect(component.value).toBe(mockValue);
    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(mockValue);
  });

  it('should emit handleOnBlur and call onTouched on handleTouch', () => {
    const emitSpy = jest.spyOn(component.handleOnBlur, 'emit');
    const onTouchedSpy = jest.spyOn(component, 'onTouched');

    component.handleTouch();

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(true);
    expect(onTouchedSpy).toHaveBeenCalledTimes(1);
  });

  it('should update the value on writeValue', () => {
    const mockValue = 'Test value';

    component.writeValue(mockValue);

    expect(component.value).toBe(mockValue);
  });

  it('should register and call onChange and onTouched functions', () => {
    const onChangeFn = jest.fn();
    const onTouchedFn = jest.fn();

    component.registerOnChange(onChangeFn);
    component.registerOnTouched(onTouchedFn);

    component.handleChange('New value');
    component.handleTouch();

    expect(onChangeFn).toHaveBeenCalledTimes(1);
    expect(onTouchedFn).toHaveBeenCalledTimes(1);
  });
});
