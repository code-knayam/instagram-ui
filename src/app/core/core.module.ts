import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { FeedComponent } from "./feed/feed.component";
import { ProfileComponent } from "./shared/profile/profile.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { RouterModule } from "@angular/router";
import { CoreRoutingModule } from "./core-routing.module";
import { PostComponent } from "./shared/post/post.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ViewPostComponent } from "./view-post/view-post.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { UsersListComponent } from "./shared/users-list/users-list.component";
import { SearchComponent } from "./search/search.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CoreComponent,
    FeedComponent,
    ProfileComponent,
    AddPostComponent,
    NavbarComponent,
    PostComponent,
    ViewPostComponent,
    UserProfileComponent,
    MyProfileComponent,
    UsersListComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CoreModule {}
