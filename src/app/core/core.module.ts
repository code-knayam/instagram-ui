import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { FeedComponent } from "./feed/feed.component";
import { ProfileComponent } from "./profile/profile.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  declarations: [
    CoreComponent,
    FeedComponent,
    ProfileComponent,
    AddPostComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, CoreRoutingModule],
})
export class CoreModule {}
