import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LaunchesComponent} from './launches/launches.component';
import {LaunchesService} from "./services/launches.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {DetailsComponent} from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
