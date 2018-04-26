import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnChanges {

  @Input() watchLink: string;
  embedLink: string;

  constructor() {
  }

  ngOnChanges() {
    this.embedLink = this.watchLink.replace('watch?v=', 'embed/') + '?' + Math.floor((Math.random() * 100) + 1)
  }
}
