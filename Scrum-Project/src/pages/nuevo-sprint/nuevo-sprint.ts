import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewProjectPage } from '../view-project/view-project';

/**
 * Generated class for the NuevoSprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nuevo-sprint',
  templateUrl: 'nuevo-sprint.html',
})
export class NuevoSprintPage {

  idUsuario:number;
  nombre = "";
  myDateI = "";
  myDateF = "";
  idSprint:any;
  idProject:number;
  //idSprint:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public manejadorProvider: ManejadorProvider ) {
    this.idProject = navParams.get('projectId');
    this.idSprint = navParams.get('sprintId');
    this.idUsuario = navParams.get('userId');

  }

  ionViewDidLoad() {
    if(this.idSprint){
      this.manejadorProvider.showProject("viewSprints",this.idSprint, "idSprint")
        .then(data => {
          this.nombre = data['sprints'][0]['SprintName'];
          this.myDateI = data['sprints'][0]['FechaInicial'];
          this.myDateF = data['sprints'][0]['FechaFinal'];
        });
    }
  }

  public crear(){
    if(this.idSprint){
      this.manejadorProvider.newSprint("updateSprint",this.idSprint, this.nombre, this.myDateI, this.myDateF)
        .then(data => {
          console.log("entra en update y mi idProject", this.idProject);
          this.idSprint = data;
          this.navCtrl.setRoot(ViewProjectPage, { projectId: this.idProject, userId: this.idUsuario });
        });
    }else{
      this.manejadorProvider.newSprint("newSprint",this.idProject, this.nombre, this.myDateI, this.myDateF)
        .then(data => {
          console.log(data);
          this.idSprint = data;
          this.navCtrl.setRoot(ViewProjectPage, { projectId: this.idProject, userId: this.idUsuario });
        });
    }
  }
/*
  public crear(){
    this.manejadorProvider.newSprint("newSprint", this.idProject, this.nombre, this.myDateI, this.myDateF)
    .then(data => {
      console.log(data);
  }*/

  dismiss()
	{
		this.viewCtrl.dismiss();
  }


}
