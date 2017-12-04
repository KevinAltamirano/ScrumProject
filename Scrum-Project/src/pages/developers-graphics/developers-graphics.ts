import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ProjectGraphicsPage } from '../project-graphics/project-graphics';

/**
 * Generated class for the DevelopersGraphicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-developers-graphics',
  templateUrl: 'developers-graphics.html',
})
export class DevelopersGraphicsPage {

  lista: Array<any> = [];
  accion = "showteam";
  users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider) {
  }

  ionViewDidLoad() {
    this.manejadorProvider.showteam(this.accion)
    .then(data => {
      this.users = data['usuarios'];
      //console.log(this.project.length);
      if(this.users==null){
        //  alert('No tiene ningun proyecto');
      }else{
        for (var _i = 0; _i < this.users.length; _i++) {
          if(this.users[_i]['idRol']==2){
          var p = {
            id: this.users[_i]['idUsuario'],
            nombre: this.users[_i]['Usuario']
          };
          this.lista.push(p);

        }
        }
      }

    });
  }

  public ver(id:number){
    this.navCtrl.setRoot(ProjectGraphicsPage, { userId: id });
  }

}
