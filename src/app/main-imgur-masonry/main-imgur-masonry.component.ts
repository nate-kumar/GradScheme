import { Component, OnInit } from '@angular/core';
import { ImageFile } from '../main-imgur/image-file.model';

@Component({
  selector: 'app-main-imgur-masonry',
  templateUrl: './main-imgur-masonry.component.html',
  styleUrls: ['./main-imgur-masonry.component.scss']
})
export class MainImgurMasonryComponent implements OnInit {

  imageFiles = [
    new ImageFile('Abdollah','Abdollah','','jpg'),
    new ImageFile('Absdullah','Absdullah','','jpg'),
    new ImageFile('Big D\'s Little D','Big D\'s Little D','','png'),
    new ImageFile('Deal With It','Deal With It','','png'),
    new ImageFile('Dom Ectomorph','Dom Ectomorph','','png'),
    new ImageFile('Dom vs Evan','Dom vs Evan','','png'),
    new ImageFile('Evan Scout','Evan Scout','','png'),
    new ImageFile('Furly Bird','Furly Bird','','png'),
    new ImageFile('Knowlescraft','Knowlescraft','','jpg'),
    new ImageFile('Luke \'Ollie Sykes\' Milwain','Luke \'Ollie Sykes\' Milwain','','png'),
    new ImageFile('Pentagonal','Pentagonal','','png'),
    new ImageFile('Pieta Bread','Pieta Bread','','png')
  ] 

  constructor() { }

  ngOnInit() {
  }

}
