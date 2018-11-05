import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  activePage: string;

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.activeRoute.snapshot.params)
  }

}
