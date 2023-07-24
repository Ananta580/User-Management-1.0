import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { FormsModule } from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set input properties correctly', () => {
    component.value = 'option2';
    component.label = 'Select an option';
    component.list = ['option1', 'option2', 'option3'];
    fixture.detectChanges();

    expect(component.value).toBe('option2');
    expect(component.label).toBe('Select an option');
    expect(component.list).toEqual(['option1', 'option2', 'option3']);
  });

  it('should update the value and emit changes on handleChange', () => {
    const mockValue = 'option3';
    const emitSpy = jest.spyOn(component.handleOnChange, 'emit');

    component.handleChange(mockValue);

    expect(component.value).toBe(mockValue);
    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(mockValue);
  });

  it('should update the value on writeValue', () => {
    const mockValue = 'option1';

    component.writeValue(mockValue);

    expect(component.value).toBe(mockValue);
  });

  it('should register and call onChange and onTouched functions', () => {
    const onChangeFn = jest.fn();
    const onTouchedFn = jest.fn();

    component.registerOnChange(onChangeFn);
    component.registerOnTouched(onTouchedFn);

    component.handleChange('option2');

    expect(onChangeFn).toHaveBeenCalledTimes(1);
    expect(onTouchedFn).toHaveBeenCalledTimes(0);
  });
});
