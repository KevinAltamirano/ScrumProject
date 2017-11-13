import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ActionSheetController } from 'ionic-angular';
import { ProyectoNuevoPage } from '../proyecto-nuevo/proyecto-nuevo';
import { ManejadorProvider } from '../../providers/manejador';
import { SprintsPage } from '../sprints/sprints';
import { ViewProjectPage } from '../view-project/view-project';
import { HistoriasUsuariosPage } from '../historias-usuarios/historias-usuarios';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ProyectoPage');
    this.manejadorProvider.proyecto(this.accion)
    .then(data => {
      this.project = data['proyectos'];
      if(this.project==null){
          alert('No tiene ningun proyecto');
      }else{
        for (var _i = 0; _i < this.project.length; _i++) {
          var p = {
        		id: this.project[_i]['idProyecto'],
        		nombre: this.project[_i]['Nombre'],
        		idTeam: this.project[_i]['idTeam'],
            descripcion: this.project[_i]['Descripcion']
        	};
          this.lista.push(p);
        }
      }

    });
  }

  public openModal(){
    let modal = this.modalCtrl.create(ProyectoNuevoPage);
    modal.present();
  }

  public nuevo(): void {
    let modal = this.modalCtrl.create(ProyectoNuevoPage);
    modal.present();
  }
  public atras(): void {
    let modal = this.modalCtrl.create(ProyectoPage);
    modal.present();
  }
  public historias(): void {
    let modal = this.navCtrl.setRoot(SprintsPage);

  }

  public detalles(id:number): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
       buttons: [
         {
           text: 'Ver',
           handler: () => {
             let modal = this.modalCtrl.create(ViewProjectPage, { projectId: id });
             modal.present();
           }
         },
         {
           text: 'Editar',
           handler: () => {
             console.log('Archive clicked');
           }
         },
         {
           text: 'Eliminar',
           handler: () => {
             this.manejadorProvider.eliminar(id, 'eliminarProyecto', 'idProyecto')
             .then(data => {
               console.log(data);
               this.navCtrl.setRoot(ProyectoPage);
             });
           }
         },
         {
           text: 'Cancelar',
           role: 'cancel',
           handler: () => {
             console.log('Cancel clicked');
           }
         }
       ]
     });

     actionSheet.present();

	}

}
