import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
  userId = "5e8607d2b6bbbb6de93bf06f";
  posts: any = [];
  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.postsService.getPostsFeedByUserId(this.userId).subscribe((resp) => {
      this.posts = resp;
    });
  }
}
