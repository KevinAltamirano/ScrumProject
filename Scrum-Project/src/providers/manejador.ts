import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ManejadorProvider{
  database = 'http://localhost:8080/scrumproject/conexion.php';
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

  public showteam(ac:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data=JSON.stringify({accion:ac});
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



public newProject(nombre:string, descripcion:string, team:string){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:"newProject", id:this.usuario['idUsuario'], nombre:nombre, descripcion:descripcion, team:team});
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

public showProject(ac:string, idP:number){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:ac, id:idP});
  console.log(idP);
  return new Promise(resolve => {
  this.http.post(this.database,data,headers).subscribe(data => {
    //console.log('esto es del manejadorProvider');
    resolve(data);
    //console.log(data[0]);

  }, err => {
    console.log(err);
  });
});
}

}
