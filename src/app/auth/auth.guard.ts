import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private authService:AuthService
  private router: Router

  constructor(authService:AuthService, router: Router) {
    this.authService = authService
    this.router = router
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
     let authenticate = this.authService.isAuthenticate()

     if(authenticate) {
      return true
     } else {
       this.router.navigate(['login'])
       return false
     }
  }
  
}
