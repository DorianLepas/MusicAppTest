import { PlayMusicPageComponent } from './../play-music-page/play-music-page.component';
import { MorceauxPageComponent } from './../morceaux-page/morceaux-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'morceaux',
    component: MorceauxPageComponent,
  },
  {
    path:'music',
    component: PlayMusicPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
