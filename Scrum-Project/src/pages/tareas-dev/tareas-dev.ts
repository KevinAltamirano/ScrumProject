import { Component } from '@angular/core';
import { NavController, NavParams,  ModalController } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import {EstatusTareaPage} from '../estatus-tarea/estatus-tarea';
import { Login1Page } from '../login1/login1';
import { App } from 'ionic-angular';
import { NgClass } from '@angular/common/src/directives/ng_class';
import { Card } from 'ionic-angular/components/card/card';
import { CardContent } from 'ionic-angular/components/card/card-content';
import { Content } from 'ionic-angular/components/content/content';

/**
 * Generated class for the TareasDevPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tareas-dev',
  templateUrl: 'tareas-dev.html',
})
export class TareasDevPage {
  idEstado="";
  content: Content;
  idUser:number;
  lista: Array<any> = [];
  tareas:any;
  try = "";
  constructor(public app: App,public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public viewCtrl: ViewController, public modalCtrl: ModalController) {

    this.idUser = navParams.get('idU');
    console.log(this.idUser);
  }

  ionViewDidLoad() {


    //alert('Estatus : ');
    console.log('ionViewDidLoad TareasDevPage', this.idUser);

    this.manejadorProvider.showProject("showTareas", this.idUser, "tareas.idUsuario").then(data =>{
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
            descripcion: this.tareas[_i][19],
            proyecto: this.tareas[_i][2],
            sprint: this.tareas[_i][8],
            hu: this.tareas[_i][14],
            estatus: this.tareas[_i][24]
          };
          this.lista.push(p);
          
            switch (p.estatus) {
              case 'Haciendo': {
                st = p.estatus;
                this.try = 'primary';
                //alert(st);
                break;
              }
              case 'Pendiente': {
                st = p.estatus;
                this.try = 'secondary';
                //alert(st);
                break;
              }
              case 'En pruebas': {
                st = p.estatus;
                this.try = 'light';
                //alert(st);
                break;
              }
              case 'Terminado': {
                st = p.estatus;
                this.try = 'danger';
                //alert(st);
                break;
              }
              default: {
                this.try='dark';
                break;
              }
            } 
        }
        }
        
      }
    });
  }


public editar(id:number){
  let modal = this.modalCtrl.create(EstatusTareaPage, {id:id});
  modal.present();
}
  public exit() {
    this.app.getRootNav().setRoot(Login1Page);
  }


    dismiss()
  	{
  		this.viewCtrl.dismiss();
    }

}
