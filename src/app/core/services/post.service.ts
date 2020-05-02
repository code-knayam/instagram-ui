import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPostsByUserId(userId) {
    return this.http.get(`posts/user/${userId}`);
  }
}
