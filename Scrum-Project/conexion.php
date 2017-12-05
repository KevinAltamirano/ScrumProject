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
      if ($id == 0) {
        $result=mysqli_query($func(),"SELECT * FROM proyecto");
        while ($row = mysqli_fetch_array($result)) {
          $dat['proyectos'][] = $row;

         }
      }
      else {
        $result=mysqli_query($func(),"SELECT * FROM proyecto WHERE idUsuario = ".$id);
        while ($row = mysqli_fetch_array($result)) {
          $dat['proyectos'][] = $row;

         }
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

   function showTareas($id='', $type=''){
     $dat = array();
      $func = 'conexion';
      $result=mysqli_query($func(),"SELECT * FROM `proyecto` INNER JOIN sprints on proyecto.idProyecto = sprints.idProyecto INNER JOIN hu on sprints.idSprint=hu.idSprint INNER JOIN tareas on hu.idHU=tareas.idHU INNER JOIN estatus on tareas.idEstatus=estatus.idEstatus INNER JOIN usuarios on usuarios.idUsuario=tareas.idUsuario WHERE ".$type." = ".$id);
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

   function newProject($idU='', $name='', $desc='', $idTeam=''){
     $dat;
     $func = 'conexion';
     $con = $func();
     if(mysqli_query($con,"INSERT INTO `scrumteam`(`idUsuario`) VALUES ('".$idTeam."')")){
       $idT = mysqli_insert_id($con);
       if(mysqli_query($con,"INSERT INTO `proyecto`(`idUsuario`, `Nombre`, `Descripcion`, `idTeam`, `Estatus`) VALUES (".$idU.",'".$name."','".$desc."',".$idT.", 1)")){
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
     if(mysqli_query($con,"INSERT INTO `sprints`(`idProyecto`, `SprintName`, `FechaInicial`, `FechaFinal`, `Estatus`) VALUES (".$idP.",'".$sprintname."','".$fInicial."','".$fFinal."', 1)")){
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
     if(mysqli_query($con,"INSERT INTO `hu`(`idSprint`,`Nombre`, `Estatus`) VALUES (".$idP.",'".$name."', 1)")){
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
     if(mysqli_query($con,"INSERT INTO `tareas`(`idHU`, `Nombre`, `Descripcion`, `idUsuario`, `idEstatus`, `Estatus`) VALUES (".$idHU.",'".$name."','".$descripcion."',".$idU.",1,1)")){
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

   function updateStatus($idTarea='', $idEstatus=''){
     $dat;
     $func = 'conexion';
     $con = $func();
     $idT =(mysqli_query($con,"UPDATE `tareas` SET `idEstatus`= ".$idEstatus." WHERE idTarea = ".$idTarea));

          $fun = 'viewTareas';
          $id = $fun($idTarea, 'idTarea');
     return $id;
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

   function showStatus(){
     $dat = array();
     $func = 'conexion';
     $result=mysqli_query($func(),"SELECT * FROM `estatus`");
     while ($row = mysqli_fetch_array($result)) {
       $dat['estatus'][]= $row;
      }
      return $dat;
   }

   function eliminarTarea($id='', $referencia=''){
     $func = 'conexion';
     $result=mysqli_query($func(),"UPDATE `tareas` SET `Estatus`= 0 WHERE ".$referencia." = ".$id);

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
     $result=mysqli_query($func(),"UPDATE `hu` SET `Estatus`= 0 WHERE ".$referencia." = ".$id);

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
        $result=mysqli_query($func(),"UPDATE `sprints` SET `Estatus`= 0 WHERE ".$referencia." = ".$id);
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
        $result=mysqli_query($func(),"UPDATE `proyecto` SET `Estatus`= 0 WHERE ".$referencia."= ".$id);
        //echo $result;
      return $result;
   }

   function countTareas($idP='',$referencia=''){
     //SELECT COUNT(*) AS tareas FROM `tareas` INNER JOIN `hu` on tareas.idHU = hu.idHU INNER JOIN sprints ON hu.idSprint = sprints.idSprint INNER JOIN proyecto on proyecto.idProyecto = sprints.idProyecto WHERE proyecto.idProyecto = 35 AND tareas.Estatus = 1 AND tareas.idEstatus = 4
     $dat = array();
     $func = 'conexion';
     $result=mysqli_query($func(),"SELECT
    SUM(IF(tareas.idEstatus = 1, 1, 0)) AS UNO,
    SUM(IF(tareas.idEstatus = 2, 1, 0)) AS DOS,
    SUM(IF(tareas.idEstatus = 3, 1, 0)) AS TRES,
    SUM(IF(tareas.idEstatus = 4, 1, 0)) AS CUATRO
    FROM tareas INNER JOIN hu on tareas.idHU = hu.idHU INNER JOIN sprints ON hu.idSprint = sprints.idSprint INNER JOIN proyecto on proyecto.idProyecto = sprints.idProyecto INNER JOIN estatus ON estatus.idEstatus = tareas.idEstatus  WHERE ".$referencia." = ".$idP." AND tareas.Estatus = 1");
     while ($row = mysqli_fetch_array($result)) {
       $dat[] = $row;
      }
     return $dat;
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
          case "showTareas":
              $idP=$request->id;
              $type=$request->type;
              $func = 'showTareas';
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
          case "updateStatus":
              $idT=$request->id;
              $idS=$request->type;
              $func = 'updateStatus';
              echo json_encode($func($idT, $idS));
              break;
          case "showStatus":
              $func = 'showStatus';
              echo json_encode($func());
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
          case "countTareas":
              $idP=$request->idP;
              $referencia=$request->referencia;
              $func = 'countTareas';
              echo json_encode($func($idP, $referencia));
              break;
        }
    }
    else
    {
        echo "Not allowed";
    }

 ?>
