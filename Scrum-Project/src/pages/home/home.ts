import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProyectoPage } from '../proyecto/proyecto';
import { Login1Page } from '../login1/login1'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  public login(): void{
<<<<<<< HEAD
  	let modal = this.navCtrl.setRoot(Login1Page)
=======
  	this.navCtrl.setRoot(ProyectoPage)
>>>>>>> 2f7c09215f9ad1f0fbc0d3311c8923b3fb4e3562
  	
  }
}
