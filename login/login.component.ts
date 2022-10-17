import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg;
  constructor(private _router: Router, private _authService:AuthService) { }

  ngOnInit() {
  }

  // goToProduct(){
  //  this._router.navigate(['products']);
  // //  this._router.navigate(['products/laptop']);
  // }
    
  login(username:string, password:string){
    var output =this._authService.checkUserNameandPassword(username,password);
    if(output == true)
    {
      this._router.navigate(['/products']);
    }
    else{
      this.msg="invalid username and password";

    }

  }
}
