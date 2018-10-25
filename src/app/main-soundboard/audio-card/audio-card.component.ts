import { AudioClip } from '../audio-clip';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio-card',
  templateUrl: './audio-card.component.html',
  styleUrls: ['./audio-card.component.scss']
})
export class AudioCardComponent implements OnInit {

  @Input() audioCard: AudioClip;
  audioFileUrl: string;
  prefix = "..\\assets\\"
  
  constructor() { }

  ngOnInit() {
    this.audioFileUrl = this.prefix + this.audioCard.id + '.' + this.audioCard.filetype;
  }

}
