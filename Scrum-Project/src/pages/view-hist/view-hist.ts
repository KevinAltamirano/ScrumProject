import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { TareasaAsignarPage } from '../tareasa-asignar/tareasa-asignar';
import { VerTareasPage } from '../ver-tareas/ver-tareas';
import { AlertController } from 'ionic-angular';
import { ProyectoPage } from '../proyecto/proyecto';
import { ViewProjectPage } from '../view-project/view-project';
import { SprintsPage } from '../sprints/sprints';

/**
 * Generated class for the ViewHistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-hist',
  templateUrl: 'view-hist.html',
})
export class ViewHistPage {
  idHU:number;
  idP:number;
  idUsuario:number;
  idS:number;
  hu:any;
  tareas:any;
  lista: Array<any> = [];
  lista2: Array<any> = [];
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider,public modalCtrl: ModalController, public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController) {
    console.log('userId VIEW-HIST', navParams.get('userId'));
    this.idHU = navParams.get('huId');
    this.idP = navParams.get('projectId');
    this.idUsuario = navParams.get('userId');
    this.idS = navParams.get('sprintId');
  }

  ionViewDidLoad() {
    this.manejadorProvider.showProject("viewHU", this.idHU, "idHU")
    .then(data => {
      //console.log('hola', data['hu']);
      this.hu = data['hu'][0];
          var p = {
        		nombre: this.hu['Nombre'],
            id: this.hu['idHU']
        	};
          //console.log(p);
          this.lista.push(p);

    });

    this.manejadorProvider.showProject("viewTareas", this.idHU, "idHU")
    .then(data => {
      this.tareas = data['tareas'];
      if(this.tareas==null){
          alert('No tiene ninguna tarea');
      }else{
        for (var _i = 0; _i < this.tareas.length; _i++) {
          if( this.tareas[_i]['Estatus']==1){
          var a = {
        		id: this.tareas[_i]['idTarea'],
        		nombre: this.tareas[_i]['Nombre']
        	};
          this.lista2.push(a);
        }
        }
      }

    });
  }

  public open(){
    let modal = this.modalCtrl.create(TareasaAsignarPage, { huId: this.idHU, projectId: this.idP, userId:this.idUsuario, sprintId:this.idS });
    modal.present();
  }

  public ver(id:number){
    this.navCtrl.setRoot(VerTareasPage, { tareaId: id, projectId: this.idP, huId: this.idHU, sprintId:this.idS, userId:this.idUsuario });
  }

  public editar(id:number){
    let modal = this.modalCtrl.create(TareasaAsignarPage, { tareaId: id, projectId: this.idP, huId: this.idHU, userId:this.idUsuario, sprintId:this.idS });
    modal.present();
  }

  public eliminar(id:number){
    let alert = this.alertCtrl.create({
      title: 'Confirmar',
      message: '¿Seguro que deseas eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si!',
          handler: () => {
            this.manejadorProvider.eliminar(id, 'eliminarTarea', 'idTarea')
            .then(data => {
              console.log(data);
              this.navCtrl.setRoot(ViewHistPage, { huId: this.idHU, projectId: this.idP });
            });
          }
        }
      ]
    });
    alert.present();
  }

  dismiss()
	{
		this.viewCtrl.dismiss();
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

}
