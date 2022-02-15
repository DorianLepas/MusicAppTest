import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-morceaux-page',
  templateUrl: './morceaux-page.component.html',
  styleUrls: ['./morceaux-page.component.scss'],
})
export class MorceauxPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  backtoHomePage(){
    this.router.navigate(['']);
  }

  gotoMusicPage(){
    this.router.navigate(['/music']);
  }

}
