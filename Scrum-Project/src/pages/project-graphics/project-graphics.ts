import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectGraphicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-project-graphics',
  templateUrl: 'project-graphics.html',
})
export class ProjectGraphicsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('projectId'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectGraphicsPage');
  }

}
