import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AudioCardComponent } from './main-soundboard/audio-card/audio-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainSoundboardComponent } from './main-soundboard/main-soundboard.component';
import { MainImgurComponent } from './main-imgur/main-imgur.component';
import { MainGradvideosComponent } from './main-gradvideos/main-gradvideos.component';
import { ImageCardComponent } from './main-imgur/image-card/image-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AudioCardComponent,
    SidebarComponent,
    MainSoundboardComponent,
    MainImgurComponent,
    MainGradvideosComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
