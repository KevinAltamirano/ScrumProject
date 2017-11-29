import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { SprintsPage } from '../sprints/sprints';
/**
 * Generated class for the HistoriasUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-historias-usuarios',
  templateUrl: 'historias-usuarios.html',
})
export class HistoriasUsuariosPage {

  idS:number;
  idHU:any;
  nombre="";
  idP:any;
  //idHU:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController) {
    this.idS = navParams.get('sprintId');
    this.idHU = navParams.get('huId');
    this.idP = navParams.get('projectId');
  }

  ionViewDidLoad() {
    if(this.idHU){
      this.manejadorProvider.showProject("viewHU", this.idHU, "idHU")
      .then(data => {
        this.nombre= data['hu'][0]['Nombre'];

      });
    }
  }

  public crear(): void{
    if(this.idHU){
      this.manejadorProvider.newHU("updateHU",this.idHU, this.nombre)
        .then(data => {
          this.idHU = data;
          this.navCtrl.setRoot(SprintsPage, { sprintId: this.idS, projectId: this.idP});
        });
    }else{
    this.manejadorProvider.newHU("newHU",this.idS, this.nombre)
      .then(data => {
        this.idHU = data;
        this.navCtrl.setRoot(SprintsPage, { sprintId: this.idS, projectId: this.idP});
      });
    }
  }



  dismiss()
	{
		this.viewCtrl.dismiss();
	}

}
