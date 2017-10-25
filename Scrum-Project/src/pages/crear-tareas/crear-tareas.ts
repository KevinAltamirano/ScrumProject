import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TareasaAsignarPage } from '../tareasa-asignar/tareasa-asignar'
import { HistoriasUsuariosPage } from '../historias-usuarios/historias-usuarios';
import { VerTareasPage } from '../ver-tareas/ver-tareas'

import { ProyectoPage } from '../proyecto/proyecto';

/**
 * Generated class for the CrearTareasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-crear-tareas',
  templateUrl: 'crear-tareas.html',
})
export class CrearTareasPage {
  lista: Array<any> =[
    {
      id: 1,
      nombre: "Acceso Usuarioss",
      idTeam: 2
    },
    {
      id: 2,
      nombre: "ScrumProject",
      idTeam: 2
    }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearTareasPage');
  }

  public atras(): void {
    let modal = this.navCtrl.setRoot(HistoriasUsuariosPage)


  }
  public home(): void {
    let modal = this.navCtrl.setRoot(ProyectoPage)


  }
  public crear(): void {
    let modal = this.navCtrl.setRoot(TareasaAsignarPage)


  }

  public ver(): void {
    let modal = this.navCtrl.setRoot(VerTareasPage)


  }




}
