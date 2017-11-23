import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ManejadorProvider } from '../../providers/manejador';
import { TareasDevPage } from '../tareas-dev/tareas-dev';

/**
 * Generated class for the EstatusTareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-estatus-tarea',
  templateUrl: 'estatus-tarea.html',
})
export class EstatusTareaPage {

  idTarea:number;
  estatus:any;
  lista: Array<any> = [];
  toppings="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public manejadorProvider: ManejadorProvider) {
    this.idTarea = navParams.get('id');
    console.log(this.idTarea);
  }

  ionViewDidLoad() {
    this.manejadorProvider.showteam("showStatus")
    .then(data => {
      this.estatus = data['estatus'];
        for (var _i = 0; _i < this.estatus.length; _i++) {
          var p = {
            id: this.estatus[_i]['idEstatus'],
            nombre: this.estatus[_i]['Nombre']
          };
          this.lista.push(p);
        }

    });
  }

  dismiss()
	{
		this.viewCtrl.dismiss();
	}

  public actualizar(){
    console.log(this.toppings);
    this.manejadorProvider.showProject("updateStatus", this.idTarea, this.toppings).then(data =>{
      console.log(data['tareas'][0]['idUsuario']);
      this.navCtrl.setRoot(TareasDevPage, {idU:data['tareas'][0]['idUsuario']});
    });
  }

}
