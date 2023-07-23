import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'um-switch',
  templateUrl: './switch.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent {
  selected = false;

  protected isChecked?: boolean;

  @Input() dataId?: string;

  @Input() label?: string;

  @Input() disabled = false;

  @Input()
  public set value(isChecked: boolean) {
    if (!this.disabled) {
      this.isChecked = isChecked;
      this.onChange(isChecked);
    }
  }

  @Output() hasChanged: EventEmitter<boolean> = new EventEmitter();

  onChange: (value: boolean) => void = () => undefined;

  onTouched: () => void = () => undefined;

  public writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public switcherChecked(): void {
    if (!this.disabled) {
      this.isChecked = !this.isChecked;
      this.onChange(this.isChecked);
      this.hasChanged.emit(this.isChecked);
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
