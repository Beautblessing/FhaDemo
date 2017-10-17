<?php


  $host = "localhost";
  $user = "root";
  $password = "";
  $datatebase = "firstaxdrive";




$con = mysqli_connect($host,$user,$password,$datatebase);
			
			if($con){
				
			  return $con;
				
			}else{
				
				echo "Can not connect to mysql Sever";
				
				return false;
			}








?>