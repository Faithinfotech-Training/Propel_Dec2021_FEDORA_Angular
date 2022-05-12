import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //Constructor
  constructor(public router:Router){   
  }
  
  canActivate(
    route: ActivatedRouteSnapshot): boolean{
      //expected role : From URL
      const expectedrole=route.data.role;
      //current role  : sessionSorage
      const currectrole=sessionStorage.getItem('ACCESS_ROLE');
      if(currectrole!==expectedrole){
       this.router.navigateByUrl('login'); 
       return false;
      }
     return true
  
    }
  
}
