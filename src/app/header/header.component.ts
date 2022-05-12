import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName:any;
  roleName:any;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('USERNAME');
    if(sessionStorage.getItem('ACCESS_ROLE')==='1'){
      this.roleName="Administrator";
    }else if (sessionStorage.getItem('ACCESS_ROLE')==='2'){
      this.roleName="Manager";
    }else if (sessionStorage.getItem('ACCESS_ROLE')==='3'){
      this.roleName="coordinator";
    }
  }

  //go home
  goHome(){
    console.log("Go Home");
    //Dashboard of admin, manager and ceo
  }

  // log out
  logOut(){
    console.log("log out")
    this.authService.logOut();
    this.router.navigateByUrl('');
  }
}
