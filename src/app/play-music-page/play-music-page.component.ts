import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-music-page',
  templateUrl: './play-music-page.component.html',
  styleUrls: ['./play-music-page.component.scss'],
})
export class PlayMusicPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  backtoMorceauxPage(){
    this.router.navigate(['/morceaux']);
  }

}
