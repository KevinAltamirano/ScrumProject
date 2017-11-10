import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ViewProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-project',
  templateUrl: 'view-project.html',
})
export class ViewProjectPage {
  idProject:number
  project:any;
  lista: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController) {
    console.log('UserId', navParams.get('projectId'));
    this.idProject = navParams.get('projectId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProjectPage');
    //console.log(this.idProject);
    this.manejadorProvider.showProject("viewProject", this.idProject)
    .then(data => {
      console.log(data[0]['Descripcion']);
      this.project = data[0];
          var p = {
        		nombre: this.project['Nombre'],
        		descripcion: this.project['Descripcion']
        	};
          //console.log(p);
          this.lista.push(p);

    });
  }

  dismiss()
	{
		this.viewCtrl.dismiss();
	}

}
