import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ActionSheetController } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { AlertController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { Login1Page } from '../login1/login1';
import { ProjectGraphicsPage } from '../project-graphics/project-graphics';
import { DevelopersGraphicsPage } from '../developers-graphics/developers-graphics';

/**
 * Generated class for the ChiefmasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chiefmaster',
  templateUrl: 'chiefmaster.html',
})
export class ChiefmasterPage {

  accion = "proyecto";
  project: any;
	lista: Array<any> = [];

  constructor(public app: App,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    this.manejadorProvider.proyecto(this.accion, 0)
    .then(data => {
      this.project = data['proyectos'];
      if(this.project==null){
          alert('No tiene ningun proyecto');
      }else{
        for (var _i = 0; _i < this.project.length; _i++) {
          if( this.project[_i]['Estatus']==1){
            var p = {
          		id: this.project[_i]['idProyecto'],
          		nombre: this.project[_i]['Nombre'],
          		idTeam: this.project[_i]['idTeam'],
              descripcion: this.project[_i]['Descripcion']
          	};
            this.lista.push(p);
          }
        }
      }



    });
  }

  public exit(){
    this.app.getRootNav().setRoot(Login1Page);
  }

  public ver(id:number){
    this.navCtrl.setRoot(ProjectGraphicsPage, { projectId: id });
  }

  public devs(){
    this.navCtrl.setRoot(DevelopersGraphicsPage);
  }

}
