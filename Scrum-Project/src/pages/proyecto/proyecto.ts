import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProyectoNuevoPage } from '../proyecto-nuevo/proyecto-nuevo';

/**
 * Generated class for the ProyectoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-proyecto',
  templateUrl: 'proyecto.html',
})
export class ProyectoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectoPage');
  }

  public nuevo(): void {
    let modal = this.navCtrl.setRoot(ProyectoNuevoPage)

  }

}
