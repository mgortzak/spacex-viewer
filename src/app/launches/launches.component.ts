import {Component, OnInit} from '@angular/core';
import {Launch} from "../models/launch.model";
import {LaunchesService} from "../services/launches.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  launches$: Observable<Launch[]>;

  selectedLaunch: Launch;

  constructor(private launchesService: LaunchesService) {
  }

  ngOnInit() {
    this.launches$ = this.launchesService.pastLaunches()
  }

  select(launch) {
    this.selectedLaunch = launch
  }
}
