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
          case "pastel":
              echo "i es un pastel";
              break;
        }
    }
    else
    {
        echo "Not allowed";
    }

 ?>
