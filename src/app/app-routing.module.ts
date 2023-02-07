import {NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {TestComponent} from "./components/test/test.component";

const routes: Routes = [
  {
    path: "", component: TestComponent, resolve: {
      hero: () => "DefaultPath - empty path"
    }
  },
  {
    path: "**", component: TestComponent, resolve: {
      hero: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => "DefaultPath - Match all"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
