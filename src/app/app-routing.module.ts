import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginChildComponent } from "./login-child/login-child.component";
import { TrendingComponent } from "./home/trending/trending.component";
import { SideNavComponent } from "./home/side-nav/side-nav.component";
import { AppBarComponent } from './home/app-bar/app-bar.component';
import { MenuComponent } from './home/main/menu/menu.component';
import { MainComponent } from "./home/main/main.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: MainComponent
      },
      {
        path: "trending",
        component: TrendingComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: LoginChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [
  LoginChildComponent,
  TrendingComponent,
  SideNavComponent,
  AppBarComponent,
  LoginComponent,
  HomeComponent,
  MainComponent,
  MenuComponent
];
