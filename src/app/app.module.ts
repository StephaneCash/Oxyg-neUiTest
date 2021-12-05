import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputModelComponent } from './input-model/input-model.component';

@NgModule({
  declarations: [AppComponent, InputModelComponent],
  imports: [BrowserModule],
  exports: [InputModelComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
