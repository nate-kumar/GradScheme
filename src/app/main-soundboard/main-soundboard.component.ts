import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-soundboard',
  templateUrl: './main-soundboard.component.html',
  styleUrls: ['./main-soundboard.component.scss']
})
export class MainSoundboardComponent implements OnInit {

  cards = [1,2,3,4,5]

  constructor() { }

  ngOnInit() {
  }

}
