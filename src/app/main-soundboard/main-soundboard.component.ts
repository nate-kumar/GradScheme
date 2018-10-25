import { Component, OnInit } from '@angular/core';
import { AudioClip } from './audio-clip';

@Component({
  selector: 'app-main-soundboard',
  templateUrl: './main-soundboard.component.html',
  styleUrls: ['./main-soundboard.component.scss']
})
export class MainSoundboardComponent implements OnInit {

  cards = [
    1,2,3,4,5
  ]

  cards2 = [
    new AudioClip(1,'Title 1','Subtitle 1','wav'),
    new AudioClip(2,'Title 2','Subtitle 2','wav'),
    new AudioClip(3,'Title 3','Subtitle 3','wav'),
    new AudioClip(4,'Title 4','Subtitle 4','wav'),
    new AudioClip(5,'Title 5','Subtitle 5','wav'),
  ] 

  constructor() {
    // console.log(new AudioClip(1,'Title 1','Subtitle 1'))
  }

  ngOnInit() {
  }

}
