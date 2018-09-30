import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseProvider {

  constructor(
    private afd: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

  registerUser(user){
    this.afd.list('/users/').push(user);
    console.log("Amjilttai");
  }

}
