<?php

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

$username='Andy';
$contrasena='Andy';
$idUsuario=1;
$func = 'proyecto';
echo json_encode($func($idUsuario));

 ?>
