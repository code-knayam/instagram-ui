import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { PostComponent } from "./post/post.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";

@NgModule({
  declarations: [NavbarComponent, PostComponent],
  imports: [CommonModule, AngularFontAwesomeModule],
  exports: [NavbarComponent, PostComponent],
})
export class SharedModule {}
