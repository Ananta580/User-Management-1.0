import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [NavBarComponent],
})
export class SharedModule {}
