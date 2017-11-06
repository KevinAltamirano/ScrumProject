import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProyectoPage } from '../proyecto/proyecto';
import { ManejadorProvider } from '../../providers/manejador';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Login1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page {

  usuario = "";
  contrasena = "";
  accion = "login";
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login1Page');
  }

  public proyecto(): void {
    this.manejadorProvider.login(this.usuario, this.contrasena, this.accion)
    .then(data => {
      this.user = data['usuario'];
      if(this.user==null){
          alert('Credenciales incorrectas');
      }else{
        this.navCtrl.setRoot(ProyectoPage);
      }

    });
  }
}
