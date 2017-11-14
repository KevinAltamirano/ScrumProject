import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, ActionSheetController} from 'ionic-angular';
import { ManejadorProvider } from '../../providers/manejador';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HistoriasUsuariosPage } from '../historias-usuarios/historias-usuarios';
import { ViewHistPage } from '../view-hist/view-hist';

@Component({
  selector: 'page-sprints',
  templateUrl: 'sprints.html',
})
export class SprintsPage {

  idS:number;
  idP:number;
  sprint:any;
  hu:any;
  lista: Array<any> = [];
  lista2: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public manejadorProvider: ManejadorProvider, public modalCtrl: ModalController, public viewCtrl: ViewController, public actionSheetCtrl: ActionSheetController) {
    //console.log('sprintId', navParams.get('sprintId'));
    this.idS = navParams.get('sprintId');
    this.idP = navParams.get('projectId');
  }

  ionViewDidLoad() {
    this.manejadorProvider.showProject("viewSprints", this.idS, "idSprint")
    .then(data => {
      //console.log(data[0]['Descripcion']);
      this.sprint = data['sprints'][0];
          var p = {
            id: this.sprint['idSprint'],
        		nombre: this.sprint['SprintName'],
        		inicial: this.sprint['FechaInicial'],
            final: this.sprint['FechaFinal']
        	};
          //console.log(p);
          this.lista.push(p);

    });

    this.manejadorProvider.showProject("viewHU", this.idS, "idSprint")
    .then(data => {
      this.hu = data['hu'];
      //console.log(this.sprints.length);
      if(this.hu==null){
          alert('No tiene ninguna historia de usuario');
      }else{
        for (var _i = 0; _i < this.hu.length; _i++) {
          var a = {
        		id: this.hu[_i]['idHU'],
        		nombre: this.hu[_i]['Nombre'],
        	};
          this.lista2.push(a);
        }
      }

    });
  }

  public open(){
    let modal = this.modalCtrl.create(HistoriasUsuariosPage, { sprintId: this.idS});
    modal.present();
  }

  public detalles(id:number): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
       buttons: [
         {
           text: 'Ver',
           handler: () => {
          let modal = this.modalCtrl.create(ViewHistPage, { huId: id, projectId: this.idP });
          modal.present();
           }
         },
         {
           text: 'Editar',
           handler: () => {
             let modal = this.modalCtrl.create(HistoriasUsuariosPage, { huId: id});
             modal.present();
           }
         },
         {
           text: 'Eliminar',
           handler: () => {
             this.manejadorProvider.eliminar(id, 'eliminarHU', 'idHU')
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
