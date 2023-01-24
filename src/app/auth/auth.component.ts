import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from 'src/Services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email:string='';
  password:string='';
  ngOnInit(){
    
  }
  constructor(private auth:AuthService){}
  onSubmit(form: NgForm) {
    
  }
  login(){
    if(this.email==''){
    alert('Please enter amail');
    return;
    }
    if(this.password==''){
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';

  }

  

}
