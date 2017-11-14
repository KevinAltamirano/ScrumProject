<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Credentials: true');


    $idUsuario;
    $username;
    $contrasena;

   function conexion(){
   	$hn      = 'localhost';
  	$un      = 'root';
  	$pwd     = '';
  	$db      = 'scrumproject';
   	$conexion=mysqli_connect($hn, $un, $pwd, $db) or die("Error al conectar " . mysqli_error());
   	return $conexion;
   }

   function login($user='', $pass=''){
     $data = array();
    $func = 'conexion';
    $result=mysqli_query($func(),"SELECT * FROM usuarios WHERE Usuario = '".$user."' AND Contrasena = '".$pass."'");
    if ($row = mysqli_fetch_array($result)) {
      $data['usuario'] = $row;
     }
     return $data;
   }

   function proyecto($id=''){
     $dat = array();
      $func = 'conexion';
      $result=mysqli_query($func(),"SELECT * FROM proyecto WHERE idUsuario = ".$id);
      while ($row = mysqli_fetch_array($result)) {
        $dat['proyectos'][] = $row;

       }
      return $dat;
   }

   function viewProject($id=''){
     $dat = array();
      $func = 'conexion';
      $result=mysqli_query($func(),"SELECT * FROM proyecto WHERE idProyecto = ".$id);
      while ($row = mysqli_fetch_array($result)) {
        $dat[] = $row;

       }
      return $dat;
   }

   function viewSprints($id='', $typeid=''){
     $dat = array();
      $func = 'conexion';
      $result=mysqli_query($func(),"SELECT * FROM `sprints` WHERE ".$typeid." = ".$id);
      while ($row = mysqli_fetch_array($result)) {
        $dat['sprints'][] = $row;

       }
      return $dat;
   }

   function viewHU($id='', $typeid=''){
     $dat = array();
      $func = 'conexion';
      $result=mysqli_query($func(),"SELECT * FROM `hu` WHERE ".$typeid." = ".$id);
      while ($row = mysqli_fetch_array($result)) {
        $dat['hu'][] = $row;

       }
      return $dat;
   }

   function viewTareas($id='', $typeid=''){
     $dat = array();
      $func = 'conexion';
      $result=mysqli_query($func(),"SELECT * FROM `tareas` WHERE ".$typeid." = ".$id);
      while ($row = mysqli_fetch_array($result)) {
        $dat['tareas'][] = $row;

       }
      return $dat;
   }

   function viewUser($id='', $typeid=''){
     $dat = array();
      $func = 'conexion';
      $result=mysqli_query($func(),"SELECT * FROM `tareas` WHERE ".$typeid." = ".$id);
      while ($row = mysqli_fetch_array($result)) {
        $dat['tareas'][] = $row;

       }
      return $dat;
   }

   function showteam(){
     $dat = array();
      $func = 'conexion';
      $result=mysqli_query($func(),"SELECT * FROM `usuarios`");
      while ($row = mysqli_fetch_array($result)) {
        $dat['usuarios'][] = $row;

       }
      return $dat;
   }

   function newProject($idU='', $name='', $desc='', $idTeam){
     $dat;
     $func = 'conexion';
     $con = $func();
     if(mysqli_query($con,"INSERT INTO `scrumteam`(`idUsuario`) VALUES ('".$idTeam."')")){
       $idT = mysqli_insert_id($con);
       if(mysqli_query($con,"INSERT INTO `proyecto`(`idUsuario`, `Nombre`, `Descripcion`, `idTeam`) VALUES (".$idU.",'".$name."','".$desc."',".$idT.")")){
         $dat = mysqli_insert_id($con);
       }
     }

     return $dat;
   }

   function updateProject($idU='', $name='', $desc='', $idTeam='', $idP=''){
     $dat;
     $func = 'conexion';
     $con = $func();
     if(mysqli_query($con,"INSERT INTO `scrumteam`(`idUsuario`) VALUES ('".$idTeam."')")){
       $idT = mysqli_insert_id($con);
       //UPDATE `proyecto` SET `idProyecto`=[value-1],`idUsuario`=[value-2],`Nombre`=[value-3],`Descripcion`=[value-4],`idTeam`=[value-5] WHERE 1
    $result = mysqli_query($con,"UPDATE `proyecto` SET `Nombre`='".$name."',`Descripcion`='".$desc."',`idTeam`=".$idT." WHERE idProyecto = ".$idP);

     }

     return $result;
   }

   function newSprint($idP='', $sprintname='', $fInicial='', $fFinal){
     $dat;
     $func = 'conexion';
     $con = $func();
     if(mysqli_query($con,"INSERT INTO `sprints`(`idProyecto`, `SprintName`, `FechaInicial`, `FechaFinal`) VALUES (".$idP.",'".$sprintname."','".$fInicial."','".$fFinal."')")){
       $idT = mysqli_insert_id($con);
     }

     return $idT;
   }

   function updateSprint($idP='', $sprintname='', $fInicial='', $fFinal){
     $dat;
     $func = 'conexion';
     $con = $func();
     $result=(mysqli_query($con,"UPDATE `sprints` SET `SprintName`='".$sprintname."',`FechaInicial`='".$fInicial."',`FechaFinal`='".$fFinal."' WHERE idSprint =".$idP));

     return $result;
   }
//
   function newHU($idP='', $name=''){
     $dat;
     $func = 'conexion';
     $con = $func();
     if(mysqli_query($con,"INSERT INTO `hu`(`idSprint`,`Nombre`) VALUES (".$idP.",'".$name."')")){
       $idT = mysqli_insert_id($con);
     }

     return $idT;
   }

   function updateHU($idP='', $name=''){
     $dat;
     $func = 'conexion';
     $con = $func();
     $idT=(mysqli_query($con,"UPDATE `hu` SET `Nombre`='".$name."' WHERE idHU = ".$idP));

     return $idT;
   }

   function newTarea($idHU='', $name='', $descripcion='', $idU=''){
     $dat;
     $func = 'conexion';
     $con = $func();
     if(mysqli_query($con,"INSERT INTO `tareas`(`idHU`, `Nombre`, `Descripcion`, `idUsuario`, `idEstatus`) VALUES (".$idHU.",'".$name."','".$descripcion."',".$idU.",1)")){
       $idT = mysqli_insert_id($con);
     }

     return $idT;
   }

   function updateTarea($idHU='', $name='', $descripcion='', $idU=''){
     $dat;
     $func = 'conexion';
     $con = $func();
     $idT =(mysqli_query($con,"UPDATE `tareas` SET `Nombre`='".$name."',`Descripcion`='".$descripcion."',`idUsuario`=".$idU." WHERE idTarea =".$idHU));

     return $idT;
   }

   function getTeam($id=''){
     $dat = array();
     $func = 'conexion';
     $result=mysqli_query($func(),"SELECT `idTeam` FROM `proyecto` WHERE idProyecto = ".$id);
     $row = mysqli_fetch_array($result)['idTeam'];
     $result=mysqli_query($func(),"SELECT `idUsuario` FROM `scrumteam` WHERE idTeam = ".$row);
     $row = mysqli_fetch_array($result)['idUsuario'];
     $obj = json_decode($row, true);
     for($i = 0; $i < count($obj['idUser']); ++$i) {
          $result=mysqli_query($func(),"SELECT `idUsuario`, `Usuario` FROM `usuarios` WHERE idUsuario = ".$obj['idUser'][$i]);
          while ($row = mysqli_fetch_array($result)) {
            $dat['usuarios'][]= $row;
           }
      }
    return $dat;
   }

   function getUser($id='', $type=''){
     $dat = array();
     $func = 'conexion';
     $result=mysqli_query($func(),"SELECT `idUsuario`, `Usuario` FROM `usuarios` WHERE ".$type." = ".$id);
     while ($row = mysqli_fetch_array($result)) {
       $dat[]= $row;
      }
      return $dat;
   }

   function getStatus($id='', $type=''){
     $dat = array();
     $func = 'conexion';
     $result=mysqli_query($func(),"SELECT * FROM `estatus` WHERE ".$type." = ".$id);
     while ($row = mysqli_fetch_array($result)) {
       $dat[]= $row;
      }
      return $dat;
   }

   function eliminarTarea($id='', $referencia=''){
     $func = 'conexion';
     $result=mysqli_query($func(),"DELETE FROM `tareas` WHERE ".$referencia." = ".$id);

      return $result;
   }

   function eliminarHU($id='', $referencia=''){
     $dat = array();
     $func = 'conexion';
     $result=mysqli_query($func(),"SELECT * FROM `hu` WHERE ".$referencia."=".$id);
     while ($row = mysqli_fetch_array($result)) {
       $dat[] = $row;
      }
      for ($i=0; $i < count($dat); $i++) {
        $f = 'eliminarTarea';
        $flag = $f($dat[$i]['idHU'], "idHU");
        //echo $flag;
      }
     $result=mysqli_query($func(),"DELETE FROM `hu` WHERE ".$referencia." = ".$id);

      return $result;
   }

   function eliminarSprint($id='', $referencia=''){
     $dat = array();
     $func = 'conexion';
     $result=mysqli_query($func(),"SELECT * FROM sprints WHERE ".$referencia."=".$id);
     while ($row = mysqli_fetch_array($result)) {
       $dat[] = $row;
      }
      //echo ($dat[2]['idSprint']);
      for ($i=0; $i < count($dat); $i++) {
        $f = 'eliminarHU';
        $flag = $f($dat[$i]['idSprint'], "idSprint");
        //echo $flag;
      }
        $result=mysqli_query($func(),"DELETE FROM `sprints` WHERE ".$referencia." = ".$id);
      return $result;
   }

   function eliminarProyecto($id='', $referencia=''){
     $dat = array();
     $func = 'conexion';
     $result=mysqli_query($func(),"SELECT * FROM proyecto WHERE ".$referencia."=".$id);
     while ($row = mysqli_fetch_array($result)) {
       $dat[] = $row;
      }
    //  echo ($dat[0]['idHU']);sprints.idSprint
      for ($i=0; $i < count($dat); $i++) {
        $f = 'eliminarSprint';
        $flag = $f($dat[$i]['idProyecto'],"idProyecto");
        //echo $flag;
      }
        $result=mysqli_query($func(),"DELETE FROM `proyecto` WHERE ".$referencia."= ".$id);
        //echo $result;
      return $result;
   }

   if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        $accion = $request->accion;
        switch ($accion) {
          case "login":
              $username=$request->user;
              $contrasena=$request->pass;
              $func = 'login';
              echo json_encode($func($username, $contrasena));
              break;
          case "proyecto":
              $idUsuario=$request->id;
              $func2 = 'proyecto';
              echo json_encode($func2($idUsuario));
              break;
          case "newProject":
              $idUsuario=$request->id;
              $name=$request->nombre;
              $desc=$request->descripcion;
              $idteam=$request->team;
              $func = 'newProject';
              echo json_encode($func($idUsuario,$name,$desc,$idteam));
              break;
          case "showteam":
              $func = 'showteam';
              echo json_encode($func());
              break;
          case "viewProject":
              $idP=$request->id;
              $func = 'viewProject';
              echo json_encode($func($idP));
              break;
          case "newSprint":
              $idP=$request->id;
              $nombre=$request->nombre;
              $inicial=$request->inicial;
              $final=$request->final;
              $func = 'newSprint';
              echo json_encode($func($idP, $nombre, $inicial, $final));
              break;
          case "viewSprints":
              $idP=$request->id;
              $type=$request->type;
              $func = 'viewSprints';
              echo json_encode($func($idP, $type));
              break;
          case "viewHU":
              $idP=$request->id;
              $type=$request->type;
              $func = 'viewHU';
              echo json_encode($func($idP, $type));
              break;
          case "viewTareas":
              $idP=$request->id;
              $type=$request->type;
              $func = 'viewTareas';
              echo json_encode($func($idP, $type));
              break;
          case "newHU":
              $idP=$request->id;
              $nombre=$request->nombre;
              $func = 'newHU';
              echo json_encode($func($idP, $nombre));
              break;
          case "newTarea":
              $idHU=$request->idHU;
              $nombre=$request->nombre;
              $descripcion=$request->descripcion;
              $idU=$request->idU;
              $func = 'newTarea';
              echo json_encode($func($idHU, $nombre, $descripcion, $idU));
              break;
          case "getTeam":
              $idP=$request->id;
              $func = 'getTeam';
              echo json_encode($func($idP));
              break;
          case "getUser":
              $idP=$request->id;
              $type=$request->type;
              $func = 'getUser';
              echo json_encode($func($idP, $type));
              break;
          case "getStatus":
              $idP=$request->id;
              $type=$request->type;
              $func = 'getStatus';
              echo json_encode($func($idP, $type));
              break;
          case "eliminarTarea":
              $idP=$request->id;
              $referencia=$request->referencia;
              $func = 'eliminarTarea';
              echo json_encode($func($idP, $referencia));
              break;
          case "eliminarHU":
              $idP=$request->id;
              $referencia=$request->referencia;
              $func = 'eliminarHU';
              echo json_encode($func($idP, $referencia));
              break;
          case "eliminarSprint":
              $idP=$request->id;
              $referencia=$request->referencia;
              $func = 'eliminarSprint';
              echo json_encode($func($idP, $referencia));
              break;
          case "eliminarProyecto":
              $idP=$request->id;
              $referencia=$request->referencia;
              $func = 'eliminarProyecto';
              echo json_encode($func($idP, $referencia));
              break;
          case "updateProject":
              $idUsuario=$request->id;
              $name=$request->nombre;
              $desc=$request->descripcion;
              $idteam=$request->team;
              $idP=$request->idP;
              $func = 'updateProject';
              echo json_encode($func($idUsuario,$name,$desc,$idteam, $idP));
              break;
          case "updateSprint":
              $idP=$request->id;
              $nombre=$request->nombre;
              $inicial=$request->inicial;
              $final=$request->final;
              $func = 'updateSprint';
              echo json_encode($func($idP, $nombre, $inicial, $final));
              break;
          case "updateHU":
              $idP=$request->id;
              $nombre=$request->nombre;
              $func = 'updateHU';
              echo json_encode($func($idP, $nombre));
              break;
          case "updateTarea":
              $idHU=$request->idHU;
              $nombre=$request->nombre;
              $descripcion=$request->descripcion;
              $idU=$request->idU;
              $func = 'updateTarea';
              echo json_encode($func($idHU, $nombre, $descripcion, $idU));
              break;
        }
    }
    else
    {
        echo "Not allowed";
    }

 ?>