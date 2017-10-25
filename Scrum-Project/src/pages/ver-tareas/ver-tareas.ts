import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CrearTareasPage } from '../crear-tareas/crear-tareas';
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
  
	listaTareas: Array<any> =[
    {
      id: 1,
      nombre: "Hacer Login",
      idTeam: 2
    },
    {
      id: 2,
      nombre: "Tarea Ejemplo",
      idTeam: 2
    },
    
    {
      id: 3,
      nombre: "Tarea Ejemplo2",
      idTeam:2
    }
    ]
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerTareasPage');
  }
  public atras(): void {
    let modal = this.navCtrl.setRoot(CrearTareasPage)



  }

}
