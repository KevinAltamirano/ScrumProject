import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

	lista: Array<any> =[
	{
		id: 1,
		nombre: "ScrumProject",
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
    console.log('ionViewDidLoad ProyectoPage');
  }

}
