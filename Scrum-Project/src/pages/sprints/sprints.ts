import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController } from 'ionic-angular';
import { NuevoSprintPage } from '../nuevo-sprint/nuevo-sprint';

/**
 * Generated class for the SprintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sprints',
  templateUrl: 'sprints.html',
})
export class SprintsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SprintsPage');
  }
  public openModal(){
    let modal = this.modalCtrl.create(NuevoSprintPage);
    modal.present();
  }
}
