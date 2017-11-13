import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
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

  idS:number;
  idHU:any;
  nombre="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController) {
  //  console.log('sprintId', navParams.get('sprintId'));
    this.idS = navParams.get('sprintId');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HistoriasUsuariosPage');
  }

  public crear(): void{
    this.manejadorProvider.newHU(this.idS, this.nombre)
      .then(data => {
        this.idHU = data;
        this.viewCtrl.dismiss();
      });
  }



  dismiss()
	{
		this.viewCtrl.dismiss();
	}

}
