import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { FeedComponent } from "./feed/feed.component";
import { ProfileComponent } from "./profile/profile.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { RouterModule } from "@angular/router";
import { CoreRoutingModule } from "./core-routing.module";
import { PostComponent } from "./post/post.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
  declarations: [
    CoreComponent,
    FeedComponent,
    ProfileComponent,
    AddPostComponent,
    NavbarComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    AngularFontAwesomeModule,
  ],
})
export class CoreModule {}
