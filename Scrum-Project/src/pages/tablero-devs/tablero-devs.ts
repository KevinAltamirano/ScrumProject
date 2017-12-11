import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { DevelopersGraphicsPage } from '../developers-graphics/developers-graphics';
import { ChiefmasterPage } from '../chiefmaster/chiefmaster';

/**
 * Generated class for the TableroDevsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tablero-devs',
  templateUrl: 'tablero-devs.html',
})
export class TableroDevsPage {

  pendiente: Array<any> = [];
  haciendo: Array<any> = [];
  pruebas: Array<any> = [];
  terminado: Array<any> = [];
  tareas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider) {
  }

  ionViewDidLoad() {
    this.manejadorProvider.showProject("showTareas", 1, "tareas.idEstatus").then(data =>{
      var st='';
      this.tareas = data['tareas'];
      console.log(this.tareas);
      if(this.tareas==null){
          alert('No tiene ninguna tarea asignada');
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
    this.manejadorProvider.showProject("showTareas", 2, "tareas.idEstatus").then(data =>{
      var st='';
      this.tareas = data['tareas'];
      console.log(this.tareas);
      if(this.tareas==null){
          alert('No tiene ninguna tarea asignada');
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
    this.manejadorProvider.showProject("showTareas", 3, "tareas.idEstatus").then(data =>{
      var st='';
      this.tareas = data['tareas'];
      console.log(this.tareas);
      if(this.tareas==null){
          alert('No tiene ninguna tarea asignada');
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
    this.manejadorProvider.showProject("showTareas", 4, "tareas.idEstatus").then(data =>{
      var st='';
      this.tareas = data['tareas'];
      console.log(this.tareas);
      if(this.tareas==null){
          alert('No tiene ninguna tarea asignada');
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

  public devs(){
    this.navCtrl.setRoot(DevelopersGraphicsPage);
  }

  public projects(){
    this.navCtrl.setRoot(ChiefmasterPage);
  }

}
