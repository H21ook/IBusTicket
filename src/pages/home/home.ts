import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { LoginPage } from '../login/login';
import { Profile } from '../../models/profile';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
  
  @Component({
    selector: 'page-home',
    templateUrl: 'home.html'
  })
  export class HomePage {
    
    constructor(
      public navCtrl: NavController, 
      private authProvider: AuthenticationProvider,
      private afd: AngularFireDatabase
    ) { 
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
    }
  
    logout() {
      this.authProvider.logOut();
      this.navCtrl.setRoot(LoginPage);
    }

    // getAvatar(){
      
    //   firebase.storage().ref().child("/images/" + auth.uid).getDownloadURL().then(function(url){
    //       console.log("log1: " + url);
    //       return url;
    //     });
    //   }
    //   catch(e){
    //     console.log(e);
    //   }   
    // }
  }
