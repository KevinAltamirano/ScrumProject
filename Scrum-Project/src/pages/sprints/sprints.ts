import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, ActionSheetController} from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HistoriasUsuariosPage } from '../historias-usuarios/historias-usuarios';
import { ViewHistPage } from '../view-hist/view-hist';
import { AlertController } from 'ionic-angular';
import { ProyectoPage } from '../proyecto/proyecto';
import { ViewProjectPage } from '../view-project/view-project';

@Component({
  selector: 'page-sprints',
  templateUrl: 'sprints.html',
})
export class SprintsPage {

  idS:number;
  idP:number;
  idUsuario:number;
  sprint:any;
  hu:any;
  lista: Array<any> = [];
  lista2: Array<any> = [];

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public modalCtrl: ModalController, public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController) {
    //console.log('sprintId', navParams.get('sprintId'));
    this.idS = navParams.get('sprintId');
    this.idP = navParams.get('projectId');
    this.idUsuario = navParams.get('userId');
    console.log("id de usuario en sprint: ", this.idUsuario);
  }

  ionViewDidLoad() {
    this.manejadorProvider.showProject("viewSprints", this.idS, "idSprint")
    .then(data => {
      //console.log(data[0]['Descripcion']);
      this.sprint = data['sprints'][0];
          var p = {
            id: this.sprint['idSprint'],
        		nombre: this.sprint['SprintName'],
        		inicial: this.sprint['FechaInicial'],
            final: this.sprint['FechaFinal']
        	};
          //console.log(p);
          this.lista.push(p);

    });

    this.manejadorProvider.showProject("viewHU", this.idS, "idSprint")
    .then(data => {
      this.hu = data['hu'];
      //console.log(this.sprints.length);
      if(this.hu==null){
          alert('No tiene ninguna historia de usuario');
      }else{
        for (var _i = 0; _i < this.hu.length; _i++) {
          if( this.hu[_i]['Estatus']==1){
          var a = {
        		id: this.hu[_i]['idHU'],
        		nombre: this.hu[_i]['Nombre'],
        	};
          this.lista2.push(a);
        }
        }
      }

    });
  }

  public open(){
    let modal = this.modalCtrl.create(HistoriasUsuariosPage, { sprintId: this.idS, projectId: this.idP, userId: this.idUsuario});
    modal.present();
  }

  public ver(id:number){
    this.navCtrl.setRoot(ViewHistPage, { huId: id, projectId: this.idP, userId: this.idUsuario, sprintId:this.idS });
  }

  public editar(id:number){
    let modal = this.modalCtrl.create(HistoriasUsuariosPage, { huId: id, sprintId: this.idS, projectId: this.idP, userId: this.idUsuario });
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
            this.manejadorProvider.eliminar(id, 'eliminarHU', 'idHU')
            .then(data => {
              console.log(data);
              this.navCtrl.setRoot(SprintsPage, { sprintId: this.idS, projectId: this.idP});
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

}
