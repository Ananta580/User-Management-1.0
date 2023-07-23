import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'um-select',
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent {
  @Input() value = '';

  @Input() label = '';

  @Input() list: any[] = [];

  @Output() handleOnChange: EventEmitter<string> = new EventEmitter();

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
}
