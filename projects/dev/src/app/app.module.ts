import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UduthaUiModule } from '@foa/udutha-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UduthaUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
