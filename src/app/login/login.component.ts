import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User} from 'src/app/shared/user';
import { AuthService} from 'src/app/shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare varaibles
  loginForm: FormGroup;
  isSubmitted= false;
  error: string = '';

  //user object
  loginUser: User;
  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //create a Reactive form
    this.loginForm = this.formBuilder.group({

      //Form Control name
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });
  }

  //Get all controles==rs for validation
  get formControls() {
    return this.loginForm.controls;
  }

  //check credentials
  loginCredentials() {
    console.log(this.loginForm.value)
    this.isSubmitted=true;
    //form is invalid
    if (this.loginForm.invalid){
      this.error="Sorry! Invalid Entry. Try again";
      return;
    }

    //form is valid- navigate
    if(this.loginForm.valid){
      //call webservice
      this.authService.loginVerify (this.loginForm.value)
        .subscribe(response=>{
          this.error="";
          console.log(response);
          
          sessionStorage.setItem('USERNAME',response.userName);
          sessionStorage.setItem('ACCESS_ROLE',response.roleId.toString());
          
          
          if(response==null){
            this.error="Invalid user name and/or password"
          }

          //check the role and redirect to the respective page
          else if(response.roleId===1){
            this.router.navigateByUrl('/admin')
            console.log("Administrator");

          }else if(response.roleId===2){
            this.router.navigateByUrl('/receptionist')
            console.log("receptionist");
          }else if(response.roleId===3){
            this.router.navigateByUrl('/doctor')
            console.log("doctor");
          }else if(response.roleId===4){
            this.router.navigateByUrl('/labtech')
            console.log("labtechncian");
          }else if(response.roleId===5){
            this.router.navigateByUrl('/pharmacist')
            console.log("pharmacist");
          }else{
            this.error="Sorry.. You are not allowed to access the system";
            
          }
        },
        error=>{
          console.log(error);
          this.error="Sorry! Invalid username or password";
        }
        )
    }
  }

}
