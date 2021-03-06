import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { ProfileComponent } from "./shared/profile/profile.component";
import { CoreComponent } from "./core.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UsersListComponent } from "./shared/users-list/users-list.component";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  {
    path: "",
    component: CoreComponent,
    children: [
      { path: "feed", component: FeedComponent },
      { path: "search", component: SearchComponent },
      { path: "add", component: AddPostComponent },
      { path: "profile", component: MyProfileComponent },
      { path: "user/:id", component: UserProfileComponent },
      { path: "post/:id", component: ViewPostComponent },
      {
        path: "users/:type/:id",
        component: UsersListComponent,
      },
      { path: "", redirectTo: "feed", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
