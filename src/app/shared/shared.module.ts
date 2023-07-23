import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SwitchComponent } from './components/switch/switch.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavBarComponent,
    ButtonComponent,
    InputComponent,
    SwitchComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [NavBarComponent, ButtonComponent, InputComponent, SwitchComponent],
})
export class SharedModule {}
