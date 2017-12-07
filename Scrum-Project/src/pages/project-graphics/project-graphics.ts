import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { App } from 'ionic-angular';
import { Login1Page } from '../login1/login1';
import { TableroDevsPage } from '../tablero-devs/tablero-devs';
import { DevelopersGraphicsPage } from '../developers-graphics/developers-graphics';
import { ChiefmasterPage } from '../chiefmaster/chiefmaster';
/**
 * Generated class for the ProjectGraphicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-project-graphics',
  templateUrl: 'project-graphics.html',
})
export class ProjectGraphicsPage {

  idP:number;
  idU:number;
  project:any;
  lista: Array<any> = [];
  cantidades: any;
  public pieChartLabels:string[] = ['Pendiente', 'Haciendo', 'En pruebas', 'Terminado'];
  public pieChart:number[] = [0,0,0,0];
  public pieChartType:string = 'pie';

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider) {
    this.idP = navParams.get('projectId');
    this.idU = navParams.get('userId');
  }

  ionViewDidLoad() {
    if(this.idP){
      console.log(this.pieChart);
      this.manejadorProvider.showProject("viewProject", this.idP, "idProyecto")
      .then(data => {
        //console.log('hola', data);
        this.project = data[0];
            var p = {
          		nombre: this.project['Nombre'],
          		descripcion: this.project['Descripcion']
          	};
            //console.log(p);
            this.lista.push(p);

      });
      this.manejadorProvider.count("countTareas", this.idP, "proyecto.idProyecto")
      .then(data => {
        for (var i = 0; i < 4; i++) {
          var p =  (parseInt(data[0][i]));
          this.pieChart[i] = p;
        }
          console.log(this.pieChart);
      });
    }
    else{
      this.manejadorProvider.showProject("getUser", this.idU, "idUsuario")
      .then(data => {
        //console.log('hola', data);
        this.project = data[0];
            var p = {
          		nombre: this.project['Usuario'],
          		descripcion: "Desarrollador"
          	};
            //console.log(p);
            this.lista.push(p);

      });
      this.manejadorProvider.count("countTareas", this.idU, "tareas.idUsuario")
      .then(data => {
        for (var i = 0; i < 4; i++) {
          var p =  (parseInt(data[0][i]));
          this.pieChart[i] = p;
        }
          console.log(this.pieChart);
      });
    }
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public exit(){
    this.app.getRootNav().setRoot(Login1Page);
  }

  public tablero(){
    this.navCtrl.setRoot(TableroDevsPage);
  }

  public devs(){
    this.navCtrl.setRoot(DevelopersGraphicsPage);
  }

  public projects(){
    this.navCtrl.setRoot(ChiefmasterPage);
  }

}
