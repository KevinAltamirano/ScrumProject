import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the NuevoSprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nuevo-sprint',
  templateUrl: 'nuevo-sprint.html',
})
export class NuevoSprintPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoSprintPage');
  }

  dismiss()
	{
		this.viewCtrl.dismiss();
	}
}
