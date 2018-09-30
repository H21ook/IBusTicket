import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/take';

@Injectable()
export class ProfileProvider {

  constructor(
    private afd: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }
  
  getProfile(userID): FirebaseObjectObservable<any> {
    return this.afd.object('profile/' + userID);
  }

  setProfile(profile) {
    this.afAuth.authState.subscribe(auth => {
      this.afd.object('/profile/'+auth.uid).set(profile);
    })
  }
}
