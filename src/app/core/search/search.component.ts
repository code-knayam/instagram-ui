import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchResults: any = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const searchBox = document.getElementById("search-box");

    const typeahead = fromEvent(searchBox, "input")
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        filter((text) => text.length > 2),
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((val) => this.userService.searchUser(val))
      )
      .subscribe((data) => {
        // Handle the data from the API
        this.searchResults = data;
      });
  }

  redirectToUser(user) {
    this.router.navigate([`/user/${user.id}`]);
  }
}
