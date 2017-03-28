import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TERRITORY_COMPONENTS} from "./territory/index";
import {appRouting, routingComponents} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    // routingComponents,
    TERRITORY_COMPONENTS
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    // appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
