// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirebaseService {
//   isLoggedIn=false;
//   constructor(public firebaseAuth : AngularFireAuth) { }
//   async signIn(email:string,password:string){
//     await this.firebaseAuth.signInWithEmailAndPassword(email,password)
//     .then(res=>{
//       this.isLoggedIn=true
//       localStorage.setItem('user',JSON.stringify(res.user))
//     })

//   }
//   // async signUp(email:string, password:string){
//   //   await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
//   //   .then(res=>{
//   //     this.isLoggedIn=true
//   //     localStorage.setItem('user',JSON.stringify(res.user))
//   //   })

//   // }
//   async signUp(email:string, password:string){
//     await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
//     .then(res=>{
//         if(res.user){
//             this.isLoggedIn=true
//             console.log('user',res.user)// check if res.user is defined
//             localStorage.setItem('user',JSON.stringify(res.user))
//         }else{
//             console.log('Error: res.user is not defined')
//         }
//     }).catch(error=>{
//         console.log('Error:',error.message)
//     })
// }

//   logout(){
//     this.firebaseAuth.signOut()
//     localStorage.removeItem('user')

//   }
// }
