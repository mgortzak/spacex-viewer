import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  player: YT.Player;
  id: string;

  @Input() link: string;

  constructor() {
  }

  ngOnInit() {
    this.id = this.link.substring(this.link.indexOf('=') + 1);
    console.log(this.id)
  }


  savePlayer(player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event) {
    console.log('player state', event.data);
  }
}
