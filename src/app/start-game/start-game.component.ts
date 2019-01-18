import { Component, OnInit } from '@angular/core';
import NoSleep from 'nosleep.js';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {
  isGameStarted: Boolean;
  noSleep = new NoSleep();

  constructor() {
    this.isGameStarted = false;
  }

  ngOnInit() {}

  startGame(): void {
    this.isGameStarted = true;
    this.noSleep.enable();
  }
}
