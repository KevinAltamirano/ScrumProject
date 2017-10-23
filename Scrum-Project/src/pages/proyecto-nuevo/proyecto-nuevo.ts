import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriasUsuariosPage } from '../historias-usuarios/historias-usuarios';

/**
 * Generated class for the ProyectoNuevoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-proyecto-nuevo',
  templateUrl: 'proyecto-nuevo.html',
})
export class ProyectoNuevoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectoNuevoPage');
  }

  public historias(): void {
    let modal = this.navCtrl.setRoot(HistoriasUsuariosPage)

  }

}