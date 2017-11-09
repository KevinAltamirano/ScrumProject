import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ManejadorProvider{
  database = 'http://localhost:80/scrumproject/conexion.php';
  usuario: any;
  constructor(public http: HttpClient){

  }

  public login(usuario:string, contrasena:string, ac:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data=JSON.stringify({user:usuario, pass:contrasena, accion:ac});
    return new Promise(resolve => {
    this.http.post(this.database,data,headers).subscribe(data => {
      //console.log('esto es del manejadorProvider');
      resolve(data);
      this.usuario = data['usuario'];
    //  console.log(this.usuario);
    }, err => {
      console.log(err);
    });
  });
  }

  public proyecto(ac:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data=JSON.stringify({id:this.usuario['idUsuario'], accion:ac});
    return new Promise(resolve => {
    this.http.post(this.database,data,headers).subscribe(data => {
      //console.log('esto es del manejadorProvider');
      resolve(data);
      //console.log(data['proyectos'][0]['Nombre']);

    }, err => {
      console.log(err);
    });
  });
  }

}
