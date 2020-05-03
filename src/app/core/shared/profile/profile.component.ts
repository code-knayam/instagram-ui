import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  @Input() userId = "";
  @Input() config = {
    isActiveUser: false,
    showFollowButton: false,
    showUnfollowButton: false,
  };

  profile: any = {};
  posts: any = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.userService.getUserDetails(this.userId).subscribe((resp) => {
      this.profile = resp;
    });

    this.postService.getPostsByUserId(this.userId).subscribe((resp: any) => {
      this.posts = resp;
    });
  }

  redirectToPost() {
    this.router.navigate(["/post/123"]);
  }

  redirectTo(type) {
    this.router.navigate([`/users/${type}/${this.userId}`]);
  }
}
