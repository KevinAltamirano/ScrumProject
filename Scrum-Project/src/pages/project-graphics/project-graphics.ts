import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { App } from 'ionic-angular';
import { Login1Page } from '../login1/login1';

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
  public pieChart:number[] = [];
  public pieChartType:string = 'pie';

  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider) {
    this.idP = navParams.get('projectId');
    this.idU = navParams.get('userId');
  }

  ionViewDidLoad() {
    if(this.idP){
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
          this.pieChart.push((data[0][0]));
          this.pieChart.push((data[0][1]));
          this.pieChart.push((data[0][2]));
          this.pieChart.push((data[0][3]));
          console.log(this.pieChart);
      });
    }
    else{
      this.manejadorProvider.showProject("getUser", this.idU, "idUsuario")
      .then(data => {
        //console.log('hola', data);
        this.project = data[0];
            var p = {
          		nombre: this.project['Nombre'],
          		descripcion: "Desarrollador"
          	};
            //console.log(p);
            this.lista.push(p);

      });
      this.manejadorProvider.count("countTareas", this.idU, "tareas.idUsuario")
      .then(data => {

          this.pieChart.push(parseInt(data[0][0]));
          this.pieChart.push(parseInt(data[0][1]));
          this.pieChart.push(parseInt(data[0][2]));
          this.pieChart.push(parseInt(data[0][3]));
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

}
