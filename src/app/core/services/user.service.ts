import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserDetails(userId) {
    return this.http.get(`user/${userId}`);
  }

  getFollowers(userId) {
    return this.http.get(`user/${userId}/followers`);
  }

  getFollowees(userId) {
    return this.http.get(`user/${userId}/followees`);
  }
}