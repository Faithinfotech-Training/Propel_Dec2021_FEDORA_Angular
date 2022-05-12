import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }


    //verify login credentials-username & password
  public loginVerify(user: User) {
    console.log(user);
    //calling webapi for checking username and password
    //@GetMapping("/users/{userName}&{password}")
    return this.httpClient.get<User>(environment.apiUrl + '/api/users/' + user.userName + '&' + user.password);
  }

  //log out
  public logOut(){
    sessionStorage.removeItem('USERNAME');
    sessionStorage.removeItem('ACCESS_ROLE')
  }
}
