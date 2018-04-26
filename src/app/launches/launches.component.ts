import {Component, OnInit} from '@angular/core';
import {Launch} from "../models/launch.model";
import {LaunchesService} from "../services/launches.service";

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  launches: Launch[];

  constructor(private launchesService: LaunchesService) {
  }

  ngOnInit() {
    this.launchesService.pastLaunches()
      .subscribe(launchData => {
          this.launches = launchData;	// Er komt nu rechtstreeks json uit de service.
          console.log(this.launches[0].flight_number);
        },
        err => console.log('FOUT: ', err),
        () => console.log('Getting launches complete'));


  }
}
