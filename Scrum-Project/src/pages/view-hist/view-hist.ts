import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { TareasaAsignarPage } from '../tareasa-asignar/tareasa-asignar';
import { VerTareasPage } from '../ver-tareas/ver-tareas';

/**
 * Generated class for the ViewHistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-hist',
  templateUrl: 'view-hist.html',
})
export class ViewHistPage {
  idHU:number;
  idP:number;
  hu:any;
  tareas:any;
  lista: Array<any> = [];
  lista2: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider,public modalCtrl: ModalController, public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController) {
    //console.log('UserId', navParams.get('huId'));
    this.idHU = navParams.get('huId');
    this.idP = navParams.get('projectId');
  }

  ionViewDidLoad() {
    this.manejadorProvider.showProject("viewHU", this.idHU, "idHU")
    .then(data => {
      //console.log('hola', data['hu']);
      this.hu = data['hu'][0];
          var p = {
        		nombre: this.hu['Nombre'],
            id: this.hu['idHU']
        	};
          //console.log(p);
          this.lista.push(p);

    });

    this.manejadorProvider.showProject("viewTareas", this.idHU, "idHU")
    .then(data => {
      this.tareas = data['tareas'];
      if(this.tareas==null){
          alert('No tiene ninguna tarea');
      }else{
        for (var _i = 0; _i < this.tareas.length; _i++) {
          var a = {
        		id: this.tareas[_i]['idTarea'],
        		nombre: this.tareas[_i]['Nombre']
        	};
          this.lista2.push(a);
        }
      }

    });
  }

  public open(){
    let modal = this.modalCtrl.create(TareasaAsignarPage, { huId: this.idHU, projectId: this.idP });
    modal.present();
  }

  public detalles(id:number): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
       buttons: [
         {
           text: 'Ver',
           handler: () => {
          let modal = this.modalCtrl.create(VerTareasPage, { tareaId: id });
          modal.present();
           }
         },
         {
           text: 'Editar',
           handler: () => {
             console.log('Archive clicked');
           }
         },
         {
           text: 'Eliminar',
           handler: () => {
             this.manejadorProvider.eliminar(id, 'eliminarTarea', 'idTarea')
             .then(data => {
               console.log(data);
               this.viewCtrl.dismiss();
             });
           }
         },
         {
           text: 'Cancelar',
           role: 'cancel',
           handler: () => {
             console.log('Cancel clicked');
           }
         }
       ]
     });

     actionSheet.present();
	}

  dismiss()
	{
		this.viewCtrl.dismiss();
	}

}
