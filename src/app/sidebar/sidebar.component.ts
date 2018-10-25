import { Route } from '../route';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems2 = [
    "GatesySoundboard",
    "ImgurRepo", 
    "GradSchemeVideos"
  ];

  menuItems = [
    new Route('Gatesy Soundboard', 'GatesySoundboard'),
    new Route('Imgur Repo', 'ImgurRepo'),
    new Route('Grad Scheme Videos', 'GradSchemeVideos')
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.menuItems2)
  }

}
