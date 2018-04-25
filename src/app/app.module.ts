import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LaunchesComponent} from './launches/launches.component';
import {LaunchesService} from "./services/launches.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
