import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";

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
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.type = params.type;
      this.userId = params.id;

      this.getUserList();
    });
  }

  getUserList() {
    if (this.type === "followers") {
      this.userService.getFollowers(this.userId).subscribe((resp) => {
        this.userList = resp;
      });
    } else if (this.type === "followees") {
      this.userService.getFollowees(this.userId).subscribe((resp) => {
        this.userList = resp;
      });
    }
  }
}
