import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { UserAuthProvider } from './../../providers/user-auth/user-auth';

import { TabbarFooterPage } from './../tabbar-footer/tabbar-footer';
import { User } from './user.object';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User;

  private allowed: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _userAuth: UserAuthProvider,
    private _alertCtrl: AlertController
    ) {
    this.user = new User();
  }

  ionViewDidLoad() { }

  getLogin() {
    this._userAuth.loginRequest(this.user.email, this.user.password).subscribe(
      () => { this.navCtrl.setRoot(TabbarFooterPage) },
      () => {
        this._alertCtrl.create({
          title: 'Falha no login',
          subTitle: 'Informações incorretas, verifique-as por favor.',
          buttons: [
            { text: 'Entendi' }
          ]
        });
      }
    );
  }

  // private userAuthentication(allow): any {

  //   if (allow) {
  //     console.log('###', this.user);
  //   } else {
  //     alert('Acesso negado!');
  //   }

  // }

}
