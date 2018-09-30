import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { UserProfilePage } from '../userprofile/user.profile';
import { Profile } from '../../models/profile';
import { ProfileProvider } from '../../providers/profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseObjectObservable} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  profile: FirebaseObjectObservable<Profile>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private authenticationProvider: AuthenticationProvider,
    private afAuth: AngularFireAuth,
    private profileProvider: ProfileProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.authenticationProvider.login(this.user)
    .then(() => {
      this.afAuth.authState.subscribe(auth => {
        this.profile = this.profileProvider.getProfile(auth.uid);

        this.profile.subscribe((profile) => {
          if(profile.state == "new")
            this.navCtrl.setRoot(UserProfilePage);
          else 
            this.navCtrl.setRoot(HomePage);
        });
      });
    },
    error=>{
      console.log(error.message);
    });
  }

  goToRegister() {
      this.navCtrl.push(RegisterPage);
  }
}
