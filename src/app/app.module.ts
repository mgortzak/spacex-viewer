import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LaunchesComponent} from './launches/launches.component';
import {LaunchesService} from "./services/launches.service";
import {HttpClientModule} from "@angular/common/http";
import {DetailsComponent} from './details/details.component';
import {VideoComponent} from './video/video.component';
import {SafePipe} from "./pipes/safe.pipe";


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    DetailsComponent,
    VideoComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
