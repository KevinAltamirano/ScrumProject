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
  tareas:any;
  lista: Array<any> = [];
  pendiente: Array<any> = [];
  haciendo: Array<any> = [];
  pruebas: Array<any> = [];
  terminado: Array<any> = [];
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
        //  console.log(this.pieChart);
      });
      this.manejadorProvider.showTareas("showTareasReference", 1, "tareas.idEstatus", this.idP, "proyecto.idProyecto").then(data =>{
        var st='';
        this.tareas = data['tareas'];
      //  console.log(this.tareas);
        if(this.tareas==null){
            //alert('No tiene ninguna tarea asignada');
        }else{
          for (var _i = 0; _i < this.tareas.length; _i++) {
            if(this.tareas[_i]['Estatus']==1){
              var p = {
                id: this.tareas[_i]['idTarea'],
                nombre: this.tareas[_i][18],
                usuario: this.tareas[_i][27],
                proyecto: this.tareas[_i][2],
                sprint: this.tareas[_i][8],
                hu: this.tareas[_i][14],
                estatus: this.tareas[_i][24]
              };
              this.pendiente.push(p);
            }
          }
        }
      });
      this.manejadorProvider.showTareas("showTareasReference", 2, "tareas.idEstatus", this.idP, "proyecto.idProyecto").then(data =>{
        var st='';
        this.tareas = data['tareas'];
      //  console.log(this.tareas);
        if(this.tareas==null){
          //  alert('No tiene ninguna tarea asignada');
        }else{
          for (var _i = 0; _i < this.tareas.length; _i++) {
            if(this.tareas[_i]['Estatus']==1){
              var p = {
                id: this.tareas[_i]['idTarea'],
                nombre: this.tareas[_i][18],
                usuario: this.tareas[_i][27],
                proyecto: this.tareas[_i][2],
                sprint: this.tareas[_i][8],
                hu: this.tareas[_i][14],
                estatus: this.tareas[_i][24]
              };
              this.haciendo.push(p);
            }
          }
        }
      });
      this.manejadorProvider.showTareas("showTareasReference", 3, "tareas.idEstatus", this.idP, "proyecto.idProyecto").then(data =>{
        var st='';
        this.tareas = data['tareas'];
      //  console.log(this.tareas);
        if(this.tareas==null){
          //  alert('No tiene ninguna tarea asignada');
        }else{
          for (var _i = 0; _i < this.tareas.length; _i++) {
            if(this.tareas[_i]['Estatus']==1){
              var p = {
                id: this.tareas[_i]['idTarea'],
                nombre: this.tareas[_i][18],
                usuario: this.tareas[_i][27],
                proyecto: this.tareas[_i][2],
                sprint: this.tareas[_i][8],
                hu: this.tareas[_i][14],
                estatus: this.tareas[_i][24]
              };
              this.pruebas.push(p);
            }
          }
        }
      });
      this.manejadorProvider.showTareas("showTareasReference", 4, "tareas.idEstatus", this.idP, "proyecto.idProyecto").then(data =>{
        var st='';
        this.tareas = data['tareas'];
      //  console.log(this.tareas);
        if(this.tareas==null){
          //  alert('No tiene ninguna tarea asignada');
        }else{
          for (var _i = 0; _i < this.tareas.length; _i++) {
            if(this.tareas[_i]['Estatus']==1){
              var p = {
                id: this.tareas[_i]['idTarea'],
                nombre: this.tareas[_i][18],
                usuario: this.tareas[_i][27],
                proyecto: this.tareas[_i][2],
                sprint: this.tareas[_i][8],
                hu: this.tareas[_i][14],
                estatus: this.tareas[_i][24]
              };
              this.terminado.push(p);
            }
          }
        }
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
        //  console.log(this.pieChart);
      });
      this.manejadorProvider.showTareas("showTareasReference", 1, "tareas.idEstatus", this.idU, "tareas.idUsuario").then(data =>{
        var st='';
        this.tareas = data['tareas'];
      //  console.log(this.tareas);
        if(this.tareas==null){
            //alert('No tiene ninguna tarea asignada');
        }else{
          for (var _i = 0; _i < this.tareas.length; _i++) {
            if(this.tareas[_i]['Estatus']==1){
              var p = {
                id: this.tareas[_i]['idTarea'],
                nombre: this.tareas[_i][18],
                usuario: this.tareas[_i][27],
                proyecto: this.tareas[_i][2],
                sprint: this.tareas[_i][8],
                hu: this.tareas[_i][14],
                estatus: this.tareas[_i][24]
              };
              this.pendiente.push(p);
            }
          }
        }
      });
      this.manejadorProvider.showTareas("showTareasReference", 2, "tareas.idEstatus", this.idU, "tareas.idUsuario").then(data =>{
        var st='';
        this.tareas = data['tareas'];
      //  console.log(this.tareas);
        if(this.tareas==null){
          //  alert('No tiene ninguna tarea asignada');
        }else{
          for (var _i = 0; _i < this.tareas.length; _i++) {
            if(this.tareas[_i]['Estatus']==1){
              var p = {
                id: this.tareas[_i]['idTarea'],
                nombre: this.tareas[_i][18],
                usuario: this.tareas[_i][27],
                proyecto: this.tareas[_i][2],
                sprint: this.tareas[_i][8],
                hu: this.tareas[_i][14],
                estatus: this.tareas[_i][24]
              };
              this.haciendo.push(p);
            }
          }
        }
      });
      this.manejadorProvider.showTareas("showTareasReference", 3, "tareas.idEstatus", this.idU, "tareas.idUsuario").then(data =>{
        var st='';
        this.tareas = data['tareas'];
      //  console.log(this.tareas);
        if(this.tareas==null){
          //  alert('No tiene ninguna tarea asignada');
        }else{
          for (var _i = 0; _i < this.tareas.length; _i++) {
            if(this.tareas[_i]['Estatus']==1){
              var p = {
                id: this.tareas[_i]['idTarea'],
                nombre: this.tareas[_i][18],
                usuario: this.tareas[_i][27],
                proyecto: this.tareas[_i][2],
                sprint: this.tareas[_i][8],
                hu: this.tareas[_i][14],
                estatus: this.tareas[_i][24]
              };
              this.pruebas.push(p);
            }
          }
        }
      });
      this.manejadorProvider.showTareas("showTareasReference", 4, "tareas.idEstatus", this.idU, "tareas.idUsuario").then(data =>{
        var st='';
        this.tareas = data['tareas'];
      //  console.log(this.tareas);
        if(this.tareas==null){
          //  alert('No tiene ninguna tarea asignada');
        }else{
          for (var _i = 0; _i < this.tareas.length; _i++) {
            if(this.tareas[_i]['Estatus']==1){
              var p = {
                id: this.tareas[_i]['idTarea'],
                nombre: this.tareas[_i][18],
                usuario: this.tareas[_i][27],
                proyecto: this.tareas[_i][2],
                sprint: this.tareas[_i][8],
                hu: this.tareas[_i][14],
                estatus: this.tareas[_i][24]
              };
              this.terminado.push(p);
            }
          }
        }
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
