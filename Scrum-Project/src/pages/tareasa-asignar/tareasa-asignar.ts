import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ViewHistPage } from '../view-hist/view-hist';
/**
 * Generated class for the TareasaAsignarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tareasa-asignar',
  templateUrl: 'tareasa-asignar.html',
})
export class TareasaAsignarPage {

  responsable:number;
  nombre="";
  descripcion="";
  idHU:number;
  idP:number;
  idTarea:any;
  users:any;
  tareas:any;
  lista: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController) {
    this.idHU = navParams.get('huId');
    this.idP = navParams.get('projectId');
    this.idTarea = navParams.get('tareaId');
    console.log('projectId TAREASA-ASIGNAR', navParams.get('projectId'));
  }

  ionViewDidLoad() {
    if(this.idTarea){
      this.manejadorProvider.showProject("viewTareas", this.idTarea, "idTarea")
      .then(data => {
        this.tareas = data['tareas'];
        this.nombre = data['tareas'][0]['Nombre'];
        this.descripcion = data['tareas'][0]['Descripcion'];
        this.manejadorProvider.getTeam(this.idP)
        .then(data => {
          this.users = data['usuarios'];
            for (var _i = 0; _i < this.users.length; _i++) {
              var p = {
            		id: this.users[_i]['idUsuario'],
            		nombre: this.users[_i]['Usuario']
            	};
              this.lista.push(p);
            }

        });
      });

    }else{
    this.manejadorProvider.getTeam(this.idP)
    .then(data => {
      this.users = data['usuarios'];
        for (var _i = 0; _i < this.users.length; _i++) {
          var p = {
        		id: this.users[_i]['idUsuario'],
        		nombre: this.users[_i]['Usuario']
        	};
          this.lista.push(p);
        }

    });
    }
  }

  public crear(): void{
    if(this.idTarea){
      this.manejadorProvider.newTarea("updateTarea",this.idTarea, this.nombre, this.descripcion, this.responsable)
        .then(data => {
          this.idTarea = data;
          this.navCtrl.setRoot(ViewHistPage, { huId: this.idHU, projectId: this.idP});
        });
    }else{
    this.manejadorProvider.newTarea("newTarea",this.idHU, this.nombre, this.descripcion, this.responsable)
      .then(data => {
        this.idTarea = data;
        this.navCtrl.setRoot(ViewHistPage, { huId: this.idHU, projectId: this.idP});
      });
    }
  }

  dismiss(){
		this.viewCtrl.dismiss();
	}
}
