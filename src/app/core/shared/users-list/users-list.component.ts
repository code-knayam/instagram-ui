import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { FOLLOWERS, FOLLOWEES } from "../constants";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  type = "";
  userId = "";
  userList: any = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.type = params.type;
      this.userId = params.id;

      this.getUserList();
    });
  }

  getUserList() {
    if (this.type === FOLLOWERS) {
      this.userService.getFollowers(this.userId).subscribe((resp) => {
        this.userList = resp;
      });
    } else if (this.type === FOLLOWEES) {
      this.userService.getFollowees(this.userId).subscribe((resp) => {
        this.userList = resp;
        // this.userList = [{ id: "5e8607d2b6bbbb6de93bf06f" }];
      });
    }
  }

  redirectToUser(user) {
    this.router.navigate([`/user/${user.id}`]);
  }

  unfollowUser(user) {
    this.userService.unfollowUser(this.userId, user.id).subscribe((resp) => {
      console.log(resp);
      this.getUserList();
    });
  }

  followUser(user) {
    this.userService.followUser(this.userId, user.id).subscribe((resp) => {
      console.log(resp);
      this.getUserList();
    });
  }
}
