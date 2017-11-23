import { Component } from '@angular/core';
import { NavController, NavParams,  ModalController } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import {EstatusTareaPage} from '../estatus-tarea/estatus-tarea';
/**
 * Generated class for the TareasDevPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tareas-dev',
  templateUrl: 'tareas-dev.html',
})
export class TareasDevPage {

  idUser:number;
  lista: Array<any> = [];
  tareas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController, public modalCtrl: ModalController) {

    this.idUser = navParams.get('idU');
    console.log(this.idUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasDevPage', this.idUser);

    this.manejadorProvider.showProject("showTareas", this.idUser, "tareas.idUsuario").then(data =>{

      this.tareas = data['tareas'];
      console.log(this.tareas);
      if(this.tareas==null){
          alert('No tiene ninguna tarea asignada');
      }else{
        for (var _i = 0; _i < this.tareas.length; _i++) {
          if(this.tareas[_i]['Estatus']==1){
          var p = {
            id: this.tareas[_i]['idTarea'],
            nombre: this.tareas[_i][18],
            descripcion: this.tareas[_i][19],
            proyecto: this.tareas[_i][2],
            sprint: this.tareas[_i][8],
            hu: this.tareas[_i][14],
            estatus: this.tareas[_i][24]
          };
          this.lista.push(p);
        }
        }
      }
    });
  }


public editar(id:number){
  let modal = this.modalCtrl.create(EstatusTareaPage, {id:id});
  modal.present()
}

    dismiss()
  	{
  		this.viewCtrl.dismiss();
    }

}
