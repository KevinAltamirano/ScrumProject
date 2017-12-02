import { Component } from '@angular/core';
import { NavController, NavParams,} from 'ionic-angular';
import { HistoriasUsuariosPage } from '../historias-usuarios/historias-usuarios';
import { ManejadorProvider } from '../../providers/manejador';
import { ProyectoPage } from '../proyecto/proyecto';
import { ViewController } from 'ionic-angular/navigation/view-controller';
/**
 * Generated class for the ProyectoNuevoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-proyecto-nuevo',
  templateUrl: 'proyecto-nuevo.html',
})
export class ProyectoNuevoPage {

  accion = "showteam";
  users: any;
  lista: Array<any> = [];
  idProject:any;
  nombre="";
  descripcion="";
  toppings="";
  team ="";
  idUser:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public manejadorProvider: ManejadorProvider) {
    this.idProject = navParams.get('idP');
    this.idUser = navParams.get('idU');
  }

  ionViewDidLoad() {
    if(this.idProject){
      this.manejadorProvider.showProject("viewProject", this.idProject, "idProyecto")
      .then(data => {
          		this.nombre= data[0]['Nombre'];
          		this.descripcion= data[0]['Descripcion'];

              this.manejadorProvider.showteam(this.accion)
              .then(data => {
                this.users = data['usuarios'];
                //console.log(this.project.length);
                if(this.users==null){
                    alert('No tiene ningun proyecto');
                }else{
                  for (var _i = 0; _i < this.users.length; _i++) {
                    if(this.users[_i]['idRol']==2){
                    var p = {
                      id: this.users[_i]['idUsuario'],
                      nombre: this.users[_i]['Usuario']
                    };
                    this.lista.push(p);
                  }
                  }
                }

              });

      });
    }else{
      this.manejadorProvider.showteam(this.accion)
      .then(data => {
        this.users = data['usuarios'];
        //console.log(this.project.length);
        if(this.users==null){
            alert('No tiene ningun proyecto');
        }else{
          for (var _i = 0; _i < this.users.length; _i++) {
            if(this.users[_i]['idRol']==2){
            var p = {
              id: this.users[_i]['idUsuario'],
              nombre: this.users[_i]['Usuario']
            };
            this.lista.push(p);
          }
          }
        }

      });
    }

  }

  public historias(): void {
    this.navCtrl.setRoot(HistoriasUsuariosPage);

  }
  public atras(): void {    
      this.team = JSON.stringify({idUser: this.toppings});
    if(this.idProject){
      this.manejadorProvider.newProject("updateProject",this.nombre, this.descripcion, this.team, this.idProject, this.idUser)
      .then(data => {
      //  this.users = data['usuarios'];
      this.navCtrl.setRoot(ProyectoPage, {idU:this.idUser});

      });
    }else{
    this.manejadorProvider.newProject("newProject",this.nombre, this.descripcion, this.team, 0, this.idUser)
    .then(data => {
    //  this.users = data['usuarios'];
    this.navCtrl.setRoot(ProyectoPage, {idU:this.idUser});

    });
    }
  }

  dismiss()
	{
		this.viewCtrl.dismiss();
	}

}
