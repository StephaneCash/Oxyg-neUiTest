import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputModelComponent } from './input-model/input-model.component';
import {SelectModelComponent} from './select-model/select-model.component';

@NgModule({
  declarations: [AppComponent, InputModelComponent, SelectModelComponent],
  imports: [BrowserModule],
  exports: [InputModelComponent, SelectModelComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
