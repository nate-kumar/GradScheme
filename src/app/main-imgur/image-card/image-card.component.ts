import { Component, OnInit, Input } from '@angular/core';
import { ImageFile } from '../image-file.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() imageCard: ImageFile;
  imageFileUrl: string;
  prefix = `..\\assets\\Images\\`
  
  constructor() { }

  ngOnInit() {
     this.imageFileUrl = `${this.prefix}${this.imageCard.id}.${this.imageCard.filetype}`;
    console.log(this.imageFileUrl)
  }

}
