import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-life-tracker",
  templateUrl: "./life-tracker.component.html",
  styleUrls: ["./life-tracker.component.scss"]
})
export class LifeTrackerComponent implements OnInit {
  constructor() {}

  currentLife: number;

  ngOnInit() {
    this.currentLife = 20;
  }

  updateLifeTotal(lifeChange: number): void {
    console.log("update", this.currentLife + lifeChange);
    this.currentLife = this.currentLife + lifeChange;
  }
}
