import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  @Input() profile: any = {};
  @Input() posts: any = [];
  @Input() config = {
    isActiveUser: false,
    showFollowButton: false,
    showUnfollowButton: false,
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  redirectToPost() {
    this.router.navigate(["/post/123"]);
  }
}
