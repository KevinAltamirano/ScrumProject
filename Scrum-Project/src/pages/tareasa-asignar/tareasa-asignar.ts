import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
/**
 * Generated class for the TareasaAsignarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tareasa-asignar',
  templateUrl: 'tareasa-asignar.html',
})
export class TareasaAsignarPage {

  responsable:number;
  nombre="";
  descripcion="";
  idHU:number;
  idP:number;
  idTarea:any;
  users:any;
  lista: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController) {
    this.idHU = navParams.get('huId');
    this.idP = navParams.get('projectId');
  }

  ionViewDidLoad() {
    this.manejadorProvider.getTeam(this.idP)
    .then(data => {
      this.users = data['usuarios'];
      if(this.users==null){
          alert('No tiene ningun proyecto');
      }else{
        for (var _i = 0; _i < this.users.length; _i++) {
          var p = {
        		id: this.users[_i]['idUsuario'],
        		nombre: this.users[_i]['Usuario']
        	};
          this.lista.push(p);
        }
      }

    });
  }

  public crear(): void{
    this.manejadorProvider.newTarea(this.idHU, this.nombre, this.descripcion, this.responsable)
      .then(data => {
        this.idTarea = data;
        this.viewCtrl.dismiss();
      });
  }

  dismiss(){
		this.viewCtrl.dismiss();
	}
}
