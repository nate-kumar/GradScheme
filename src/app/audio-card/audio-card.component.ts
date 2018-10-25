import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio-card',
  templateUrl: './audio-card.component.html',
  styleUrls: ['./audio-card.component.scss']
})
export class AudioCardComponent implements OnInit {

  @Input() cardId: string;
  audioFileName: string;
  prefix = "..\\assets\\"
  fileType = ".wav"
  
  constructor() { }

  ngOnInit() {
    this.audioFileName = this.prefix + this.cardId + this.fileType;
    // console.log(this.audioFileName);
  }

}
