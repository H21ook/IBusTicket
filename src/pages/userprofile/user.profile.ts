import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-userProfile',
  templateUrl: 'user.profile.html',
})
export class UserProfilePage {

  profileObs: FirebaseObjectObservable<Profile>;
  //profile: Profile;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private afd: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private profileProvider: ProfileProvider,
    private camera: Camera
  ) { 
    this.afAuth.authState.subscribe(auth => {
      this.profileObs = this.profileProvider.getProfile(auth.uid);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  selectImage()
  {
    console.log("HAhaha");
    // this.photoProvider.selectImage()
    // .then((data) =>
    // {
    //   console.log(data);
    //   return data;
    // });
  }

  saveProfileData() {
    this.profileObs.subscribe((profile) => {
      if(profile.state == "new")
        profile.state = "new"; // oorchlono
      // this.photoProvider.uploadImage(profile.image)
      // .then((snapshot : any) =>
      // {
      //     let uploadedImage : any = snapshot.downloadURL;
      // },
      // (err) => {
      //   console.log(err.message);
      // });

      this.profileProvider.setProfile(profile);
      this.navCtrl.setRoot(HomePage);
    });
  }
}