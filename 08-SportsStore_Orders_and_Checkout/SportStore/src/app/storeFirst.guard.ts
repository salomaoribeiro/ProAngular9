import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class StoreFirstGuard {
  private fisrtNavigation = true;

  constructor(private router: Router) {  }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.fisrtNavigation) {
      this.fisrtNavigation = false;

      if(router.component != StoreComponent) {
        this.router.navigateByUrl("/");
        return false;
      }
    }

    return true;
  }
}
