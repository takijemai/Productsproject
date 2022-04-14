import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 userData: any;
  constructor(public afs: AngularFirestore, private dbService: DbService, public afAuth: AngularFireAuth) {
this.afAuth.authState.subscribe((user) => {
  if (user) {
  this.userData = user;
  localStorage.setItem('user', JSON.stringify(this.userData));
  JSON.parse(localStorage.getItem('user'));
  } else {
  localStorage.setItem('user', null);
  JSON.parse(localStorage.getItem('user'));
  }
  });
}

doLogin(value){
  return new Promise<any>((resolve, reject) => {
    this.afAuth.signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err));
  });
  }
  doLogout(){
    return new Promise<void>((resolve, reject) => {
      this.afAuth.signOut()
        .then(() => {
          localStorage.removeItem('user');
          this.dbService.unsubscribeOnLogOut();
          resolve();
        }).catch((error) => {
          console.log(error);
          reject();
        });

    });
  }











}
