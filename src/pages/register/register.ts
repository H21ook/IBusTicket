import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Profile } from '../../models/profile';
import { ProfileProvider } from '../../providers/profile/profile';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  profile = {} as Profile;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authenticationProvider: AuthenticationProvider,
    private profileProvider: ProfileProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this.authenticationProvider.register(this.user)
    .then(() =>{
      console.log("Amjilttai burtgegdlee");
    },
    error=>{
      console.log(error.message);
    });
    this.navCtrl.pop();
  }
}
