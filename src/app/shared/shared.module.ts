import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SwitchComponent } from './components/switch/switch.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ButtonComponent,
    InputComponent,
    SwitchComponent,
    SelectComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [],
  exports: [
    NavBarComponent,
    ButtonComponent,
    InputComponent,
    SwitchComponent,
    SelectComponent,
  ],
})
export class SharedModule {}
