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
  //idHU:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController) {
    this.idS = navParams.get('sprintId');
    this.idHU = navParams.get('huId');
  }

  ionViewDidLoad() {
    if(this.idHU){
      this.manejadorProvider.showProject("viewHU", this.idHU, "idHU")
      .then(data => {
        this.nombre= data['hu'][0]['Nombre'];

      });
    }
  }

  public crear(): void{
    if(this.idHU){
      this.manejadorProvider.newHU("updateHU",this.idHU, this.nombre)
        .then(data => {
          this.idHU = data;
          this.viewCtrl.dismiss();
        });
    }else{
    this.manejadorProvider.newHU("newHU",this.idS, this.nombre)
      .then(data => {
        this.idHU = data;
        this.viewCtrl.dismiss();
      });
    }
  }



  dismiss()
	{
		this.viewCtrl.dismiss();
	}

}
