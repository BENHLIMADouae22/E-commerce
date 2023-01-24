import { AuthService } from 'src/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  email:string='';
  password:string='';

  constructor(private auth :AuthService){}
  ngOnInit(){
    
  }
  onSubmit(form: NgForm) {
    
  }
  register(){
    if(this.email==''){
    alert('Please enter email');
    return;
    }
    if(this.password==''){
      alert('Please enter password');
      return;
    }

    this.auth.register(this.email,this.password);
    this.email='';
    this.password='';

  }
  
}
