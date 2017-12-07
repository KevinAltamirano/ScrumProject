import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { TareasaAsignarPage } from '../tareasa-asignar/tareasa-asignar';
import { ProyectoPage } from '../proyecto/proyecto';
import { ViewProjectPage } from '../view-project/view-project';
import { SprintsPage } from '../sprints/sprints';
import { ViewHistPage } from '../view-hist/view-hist';

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
  idHU:number;
  idP:number;
  idUsuario:number;
  idS:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController) {
    this.idTarea = navParams.get('tareaId');
    this.idHU = navParams.get('huId');
    this.idP = navParams.get('projectId');
    this.idUsuario = navParams.get('userId');
    this.idS = navParams.get('sprintId');
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

  public proyectos(){
    this.navCtrl.setRoot(ProyectoPage, {userId: this.idUsuario});
  }

  public sprints(){
    this.navCtrl.setRoot(ViewProjectPage, {projectId: this.idP, userId: this.idUsuario});
  }

  public historias(){
    this.navCtrl.setRoot(SprintsPage, {projectId: this.idP, sprintId:this.idS, userId: this.idUsuario});
  }

  public tarea(){
    this.navCtrl.setRoot(ViewHistPage, { projectId: this.idP, huId: this.idHU, sprintId:this.idS, userId:this.idUsuario });
  }

}
