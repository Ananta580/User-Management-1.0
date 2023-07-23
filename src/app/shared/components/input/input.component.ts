import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'um-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() type: 'text' | 'number' | 'password' | 'time' | 'email' = 'text';

  @Input() value = '';

  @Input() label = '';

  @Input() placeholder = '';

  @Output() handleOnChange: EventEmitter<string> = new EventEmitter();

  @Output() handleOnBlur: EventEmitter<boolean> = new EventEmitter();

  @Input() disabled = false;

  onChange: (value: string) => void = () => {};

  onTouched: () => void = () => {};

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  handleChange(value: string) {
    this.value = value;
    this.onChange(value);
    this.handleOnChange.emit(value);
  }

  handleTouch() {
    this.handleOnBlur.emit(true);
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
