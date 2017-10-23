import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrearTareasPage } from '../crear-tareas/crear-tareas';
/**
 * Generated class for the HistoriasUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-historias-usuarios',
  templateUrl: 'historias-usuarios.html',
})
export class HistoriasUsuariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriasUsuariosPage');
  }
  public siguiente(): void {
    let modal = this.navCtrl.setRoot(CrearTareasPage)

  }
}
