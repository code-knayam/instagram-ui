import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  postId = "";
  postDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = params.id;
      this.getPostDetails();
    });
  }

  getPostDetails() {
    this.postService.getPostDetailsById(this.postId).subscribe((resp) => {
      this.postDetails = resp;
    });
  }
}
