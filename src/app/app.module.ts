import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifeTrackerComponent } from './life-tracker/life-tracker.component';
import { StartGameComponent } from './start-game/start-game.component';

@NgModule({
  declarations: [AppComponent, LifeTrackerComponent, StartGameComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
