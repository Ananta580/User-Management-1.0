import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'um-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() type: '' | 'neutral' | 'primary' | 'secondary' = '';
  @Input() size: '' | 'xs' | 'sm' | 'lg' = '';

  @Output() OnClick: EventEmitter<MouseEvent> = new EventEmitter();

  @Output() OnFocus: EventEmitter<FocusEvent> = new EventEmitter();

  @Output() OnBlur: EventEmitter<FocusEvent> = new EventEmitter();
}
