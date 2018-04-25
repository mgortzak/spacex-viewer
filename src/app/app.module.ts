import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LaunchesComponent} from './launches/launches.component';
import {LaunchesService} from "./services/launches.service";


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
