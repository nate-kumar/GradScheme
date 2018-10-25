import { MainGradvideosComponent } from '../main-gradvideos/main-gradvideos.component';
import { MainImgurComponent } from '../main-imgur/main-imgur.component';
import { MainSoundboardComponent } from '../main-soundboard/main-soundboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
  { path: 'GatesySoundboard', component: MainSoundboardComponent },
  { path: 'ImgurRepo', component: MainImgurComponent },
  { path: 'GradSchemeVideos', component: MainGradvideosComponent },
  // { path: '**', redirectTo: 'GatesySoundboard' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
