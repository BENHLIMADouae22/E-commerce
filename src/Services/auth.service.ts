import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router,private toastr:ToastrService) {}

  isLogged() {
    let token = localStorage.getItem('token');
    let resultat: string = '';
    if (!token ||token !== 'true') {
      
      if (
        confirm(
          "Afin de pouvoir consulter les produits et passer une commande, nous vous prions de vous connecter, s'il vous plaît. Merci :) Cliquez sur ok quelque fois pour accédez à la page d'authentification!"
        )
      )
        window.location.href = 'http://localhost:4200/authentification';
      
      resultat = 'false';
    } else {
      resultat = 'true';
    }
    return resultat;
  }

  //login method
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/listPro']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/authentification']);
      }
    );
  }

  //register method
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('inscription avec succes!');
        this.router.navigate(['/authentification']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/inscription']);
      }
    );
  }

  //logout method
  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/authentification']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
