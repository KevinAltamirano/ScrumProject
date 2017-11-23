import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NuevoSprintPage } from '../nuevo-sprint/nuevo-sprint';
import { SprintsPage} from '../sprints/sprints';
import { AlertController } from 'ionic-angular';
import {ProyectoPage} from '../proyecto/proyecto';
/**
 * Generated class for the ViewProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-project',
  templateUrl: 'view-project.html',
})
export class ViewProjectPage {
  idProject:number;
  project:any;
  sprints:any;
  lista: Array<any> = [];
  lista2: Array<any> = [];
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider,public modalCtrl: ModalController, public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController) {
    //console.log('UserId', navParams.get('projectId'));
    this.idProject = navParams.get('projectId');
    console.log('hola ide de proyecto', this.idProject);
  }

  ionViewDidLoad() {
    this.manejadorProvider.showProject("viewProject", this.idProject, "idProyecto")
    .then(data => {
      //console.log('hola', data);
      this.project = data[0];
          var p = {
        		nombre: this.project['Nombre'],
        		descripcion: this.project['Descripcion']
        	};
          //console.log(p);
          this.lista.push(p);

    });

    this.manejadorProvider.showProject("viewSprints", this.idProject, "idProyecto")
    .then(data => {
      this.sprints = data['sprints'];
      //console.log(this.sprints);
      if(this.sprints==null){
          alert('No tiene ningun sprint');
      }else{
        for (var _i = 0; _i < this.sprints.length; _i++) {
          if( this.sprints[_i]['Estatus']==1){
          var a = {
        		id: this.sprints[_i]['idSprint'],
        		nombre: this.sprints[_i]['SprintName'],
        		inicial: this.sprints[_i]['FechaInicial'],
            final: this.sprints[_i]['FechaFinal']
        	};
          this.lista2.push(a);
        }
        }
      }

    });
  }

  public open(){
    let modal = this.modalCtrl.create(NuevoSprintPage, { projectId: this.idProject });
    modal.present();
  }

  public ver(id:number){
    this.navCtrl.setRoot(SprintsPage, { sprintId: id, projectId: this.idProject });
  }

  public editar(id:number){
    let modal = this.modalCtrl.create(NuevoSprintPage, { sprintId: id, projectId: this.idProject });
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
            this.manejadorProvider.eliminar(id, 'eliminarSprint', 'idSprint')
            .then(data => {
              console.log(data);

              this.navCtrl.setRoot(ViewProjectPage, { projectId: this.idProject });
            });
          }
        }
      ]
    });
    alert.present();
  }

  public dismiss()	{
		this.navCtrl.setRoot(ProyectoPage);
	}

}
