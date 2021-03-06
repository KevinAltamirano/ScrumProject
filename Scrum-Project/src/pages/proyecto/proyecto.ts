import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ActionSheetController } from 'ionic-angular';
import { ProyectoNuevoPage } from '../proyecto-nuevo/proyecto-nuevo';
import { ManejadorProvider } from '../../providers/manejador';
import { SprintsPage } from '../sprints/sprints';
import { ViewProjectPage } from '../view-project/view-project';
import { HistoriasUsuariosPage } from '../historias-usuarios/historias-usuarios';
import { AlertController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { Login1Page } from '../login1/login1';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the ProyectoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-proyecto',
  templateUrl: 'proyecto.html',
})
export class ProyectoPage {
  accion = "proyecto";
  project: any;
	lista: Array<any> = [];
  idUser:number;

  constructor(public app: App,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {
    this.idUser = navParams.get('userId');
  }

  ionViewDidLoad() {
    this.manejadorProvider.proyecto(this.accion, this.idUser)
    .then(data => {
      this.project = data['proyectos'];
      if(this.project==null){
          alert('No tiene ningun proyecto');
      }else{
        for (var _i = 0; _i < this.project.length; _i++) {
          if( this.project[_i]['Estatus']==1){
            var p = {
          		id: this.project[_i]['idProyecto'],
          		nombre: this.project[_i]['Nombre'],
          		idTeam: this.project[_i]['idTeam'],
              descripcion: this.project[_i]['Descripcion']
          	};
            this.lista.push(p);
          }
        }
      }
    });
  }



  public openModal(){
    let modal = this.modalCtrl.create(ProyectoNuevoPage, {idU:this.idUser});
    modal.present();
  }

  public exit(){
    this.app.getRootNav().setRoot(Login1Page);
  }

  public atras(): void {
    let modal = this.modalCtrl.create(ProyectoPage);
    modal.present();
  }
  public historias(): void {
    this.navCtrl.setRoot(SprintsPage);

  }

  public ver(id:number){
    this.navCtrl.setRoot(ViewProjectPage, { projectId: id, userId: this.idUser });
  }

  public editar(id:number){
    let modal = this.navCtrl.push(ProyectoNuevoPage, {idP: id, idU:this.idUser});
    //modal.present();
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
            this.manejadorProvider.eliminar(id, 'eliminarProyecto', 'idProyecto')
            .then(data => {
              this.navCtrl.setRoot(ProyectoPage, {userId:this.idUser});
            });
          }
        }
      ]
    });
    alert.present();
  }



}
