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
      resolve(data);
      this.usuario = data['usuario'];
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
      resolve(data);
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
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}



public newProject(accion: string,nombre:string, descripcion:string, team:string, idP:number){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:accion, id:this.usuario['idUsuario'], nombre:nombre, descripcion:descripcion, team:team, idP:idP});
  return new Promise(resolve => {
  this.http.post(this.database,data,headers).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

public showProject(ac:string, idP:number, type:string){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:ac, id:idP, type:type});
  return new Promise(resolve => {
  this.http.post(this.database,data,headers).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

public newSprint(accion:string, idProject: number, nombre:string, inicial:string, final:string){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:accion, id:idProject, nombre:nombre, inicial:inicial, final:final});
  return new Promise(resolve => {
  this.http.post(this.database,data,headers).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

public newHU(accion:string, idSprint: number, nombre:string){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:accion, id:idSprint, nombre:nombre});
  return new Promise(resolve => {
  this.http.post(this.database,data,headers).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

public newTarea(idHU:number, nombre:string, descripcion:string, idU:number){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:"newTarea", idHU:idHU, nombre:nombre, descripcion:descripcion, idU:idU});
  return new Promise(resolve => {
  this.http.post(this.database,data,headers).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

public getTeam(id:number){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:"getTeam", id:id});
  return new Promise(resolve => {
  this.http.post(this.database,data,headers).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}

public eliminar(id:number, accion:string, referencia:string){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let data=JSON.stringify({accion:accion, id:id, referencia:referencia});
  //console.log('El id del proyec que estoy pasando', id);
  return new Promise(resolve => {
  this.http.post(this.database,data,headers).subscribe(data => {
    resolve(data);
  }, err => {
    console.log(err);
  });
});
}


}
