import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { TareasaAsignarPage } from '../tareasa-asignar/tareasa-asignar';
/**
 * Generated class for the VerTareasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ver-tareas',
  templateUrl: 'ver-tareas.html',
})
export class VerTareasPage {
  idTarea:number;
  lista: Array<any> = [];
  tareas:any;
  username:string;
  status:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController) {
    this.idTarea = navParams.get('tareaId');
  }

  ionViewDidLoad() {
    this.manejadorProvider.showProject("viewTareas", this.idTarea, "idTarea")
    .then(data => {
      this.tareas = data['tareas'];
      this.manejadorProvider.showProject("getUser", this.tareas[0]['idUsuario'], 'idUsuario')
      .then(dat => {
        this.username = dat[0]['Usuario'];
        this.manejadorProvider.showProject("getStatus", this.tareas[0]['idEstatus'], 'idEstatus')
        .then(dataa => {
          this.status = dataa[0]['Nombre'];
          console.log('El nombre de mi usuario',this.username);
          var a = {
            id: this.tareas[0]['idTarea'],
            nombre: this.tareas[0]['Nombre'],
            descripcion: this.tareas[0]['Descripcion'],
            responsable: this.username,
            estatus: this.status
          };
          this.lista.push(a);
        });
      });
    });
  }

  dismiss()
	{
		this.viewCtrl.dismiss();
  }
  
  open(){

    this.navCtrl.setRoot(TareasaAsignarPage);
  }

}
