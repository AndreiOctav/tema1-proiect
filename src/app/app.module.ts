import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tabel1Component } from './tabel1/tabel1.component';
import { Tabel2Component } from './tabel2/tabel2.component';
import { Tabel3Component } from './tabel3/tabel3.component';
import { Tabel4Component } from './tabel4/tabel4.component';
import { Tabel5Component } from './tabel5/tabel5.component';
import { Tabel6Component } from './tabel6/tabel6.component';
import { Tabel7Component } from './tabel7/tabel7.component';
import { Tabel8Component } from './tabel8/tabel8.component';

@NgModule({
  declarations: [
    AppComponent,
    Tabel1Component,
    Tabel2Component,
    Tabel3Component,
    Tabel4Component,
    Tabel5Component,
    Tabel6Component,
    Tabel7Component,
    Tabel8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
