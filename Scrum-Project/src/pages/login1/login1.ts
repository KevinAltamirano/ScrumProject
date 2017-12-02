import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProyectoPage } from '../proyecto/proyecto';
import { ManejadorProvider } from '../../providers/manejador';
import { TareasDevPage } from '../tareas-dev/tareas-dev';
import { ChiefmasterPage } from '../chiefmaster/chiefmaster';
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

  }

  public proyecto(): void {
    this.manejadorProvider.login(this.usuario, this.contrasena, this.accion)
    .then(data => {
      this.user = data['usuario'];
      if(this.user==null){
          alert('Credenciales incorrectas');
      }else{
        //console.log(this.user['idRol']);
        if(this.user['idRol']==1){
          this.navCtrl.setRoot(ProyectoPage, {idU:this.user['idUsuario']});
        }
        if(this.user['idRol']==2){
          this.navCtrl.setRoot(TareasDevPage, {idU:this.user['idUsuario']});
        }
        if(this.user['idRol']==3){
          this.navCtrl.setRoot(ChiefmasterPage);
        }
      }

    });
  }
}
