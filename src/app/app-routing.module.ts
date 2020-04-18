import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoreComponent } from "./core/core.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent,
  },
  {
    path: "",
    component: CoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
