import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
})
export class MyProfileComponent implements OnInit {
  userProfile = {};
  posts = [];
  config = {};

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit() {
    const userId = "5e8607d2b6bbbb6de93bf06f";
    this.userService.getUserDetails(userId).subscribe((resp) => {
      this.userProfile = resp;
    });

    this.postService.getPostsByUserId(userId).subscribe((resp: any) => {
      this.posts = resp;
    });

    this.config = { isActiveUser: true };
  }
}
