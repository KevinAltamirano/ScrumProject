import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, ViewController } from 'ionic-angular';
import { NuevoSprintPage } from '../nuevo-sprint/nuevo-sprint';
import { ManejadorProvider } from '../../providers/manejador';


import { CrearTareasPage } from '../crear-tareas/crear-tareas';

@Component({
  selector: 'page-sprints',
  templateUrl: 'sprints.html',
})
export class SprintsPage {

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
        if (this.project == null) {
          alert('No tiene ningun proyecto');
        } else {
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
  public open(){
    let modal = this.modalCtrl.create(NuevoSprintPage);
    modal.present();
  }

  public h(): void {
    let modal = this.navCtrl.setRoot(CrearTareasPage);

  }
  
}


@Component({
	templateUrl:'src/pages/nuevo-sprint/nuevo-sprint.html'
})

export class ModalsContentPage {

}