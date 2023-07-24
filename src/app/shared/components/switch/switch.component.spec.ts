import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchComponent } from './switch.component';
import { FormsModule } from '@angular/forms';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set input properties correctly', () => {
    component.dataId = 'switch1';
    component.label = 'Switch Label';
    component.disabled = true;
    fixture.detectChanges();

    expect(component.dataId).toBe('switch1');
    expect(component.label).toBe('Switch Label');
    expect(component.disabled).toBe(true);
  });

  it('should update the value and emit changes on switcherChecked', () => {
    const emitSpy = jest.spyOn(component.hasChanged, 'emit');

    component.switcherChecked();
    expect(component.isChecked).toBe(true);
    expect(emitSpy).toHaveBeenCalledWith(true);

    component.switcherChecked();
    expect(component.isChecked).toBe(false);
    expect(emitSpy).toHaveBeenCalledWith(false);
  });

  it('should update the value on writeValue', () => {
    component.writeValue(true);
    expect(component.isChecked).toBe(true);

    component.writeValue(false);
    expect(component.isChecked).toBe(false);
  });

  it('should register and call onChange and onTouched functions', () => {
    const onChangeFn = jest.fn();
    const onTouchedFn = jest.fn();

    component.registerOnChange(onChangeFn);
    component.registerOnTouched(onTouchedFn);

    component.switcherChecked();
    expect(onChangeFn).toHaveBeenCalledTimes(1);
    expect(onChangeFn).toHaveBeenCalledWith(true);
    expect(onTouchedFn).toHaveBeenCalledTimes(0);

    component.setDisabledState(true);
    expect(component.disabled).toBe(true);
  });
});
