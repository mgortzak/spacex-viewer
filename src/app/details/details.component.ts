import {Component, Input, OnInit} from '@angular/core';
import {Launch} from "../models/launch.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() launch: Launch;

  constructor() {
  }

  ngOnInit() {
  }

}
