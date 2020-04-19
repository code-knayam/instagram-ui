import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { ProfileComponent } from "./profile/profile.component";
import { CoreComponent } from "./core.component";

const routes: Routes = [
  {
    path: "",
    component: CoreComponent,
    children: [
      { path: "", component: FeedComponent },
      { path: "add", component: AddPostComponent },
      { path: "profile", component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
