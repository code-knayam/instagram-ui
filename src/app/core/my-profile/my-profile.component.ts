import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
})
export class MyProfileComponent implements OnInit {
  config = {};
  userId = "5e8607d2b6bbbb6de93bf06f";

  constructor() {}

  ngOnInit() {
    this.config = { isActiveUser: true };
  }
}
