import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
      nombre: "Otra tarea xd",
      idTeam: 2
    }
    ]
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerTareasPage');
  }

}
