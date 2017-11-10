import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ProyectoNuevoPage } from '../proyecto-nuevo/proyecto-nuevo';
import { ManejadorProvider } from '../../providers/manejador';
import { SprintsPage } from '../sprints/sprints';
import { CrearTareasPage } from '../crear-tareas/crear-tareas';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProyectoPage');
    this.manejadorProvider.proyecto(this.accion)
    .then(data => {
      this.project = data['proyectos'];
      console.log(this.project.length);
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
    let modal = this.modalCtrl.create(ViewProjectPage, { projectId: id });
    modal.present();
	}

}
