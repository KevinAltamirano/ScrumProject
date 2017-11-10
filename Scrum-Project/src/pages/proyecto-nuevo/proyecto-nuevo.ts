import { Component } from '@angular/core';
import { NavController, NavParams,} from 'ionic-angular';
import { HistoriasUsuariosPage } from '../historias-usuarios/historias-usuarios';

import { ProyectoPage } from '../proyecto/proyecto';
import { ViewController } from 'ionic-angular/navigation/view-controller';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectoNuevoPage');
  }

  public historias(): void {
    let modal = this.navCtrl.setRoot(HistoriasUsuariosPage);

  }
  public atras(): void {
    let modal = this.navCtrl.setRoot(ProyectoPage);

  }

  dismiss()
	{
		this.viewCtrl.dismiss();
	}

}
