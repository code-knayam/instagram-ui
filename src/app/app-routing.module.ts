import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoreComponent } from "./core/core.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "",
    loadChildren: () => import("./core/core.module").then((m) => m.CoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
