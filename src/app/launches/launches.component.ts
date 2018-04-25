import {Component, OnInit} from '@angular/core';
import {Launch} from "../models/launch.model";

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  launches: Launch[] = [
    new Launch(60, '2018-04-18T22:51:00Z', '2018-04-18T18:51:00-04:00'),
    new Launch(59, '2018-04-02T20:30:41Z', '2018-04-02T16:30:41-04:00'),
    new Launch(58, '2018-03-30T14:13:51Z', '2018-03-30T07:13:51-08:00'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
