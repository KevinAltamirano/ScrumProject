import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProyectoPage } from '../proyecto/proyecto'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  public login(): void{
  	let modal = this.navCtrl.setRoot(ProyectoPage)
  	
  }
}
