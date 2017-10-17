<?php

include("DB_connection.php");



	if(isset($_POST["name"])){
		
		
		$name = $_POST['name'];
		$regID = $_POST['regID'];
		$regDate = $_POST['regDate'];
		$bus_address = $_POST['bus_address'];
		$emp_address = $_POST['emp_address'];
		$bus_line = $_POST['bus_line'];
		$bus_code = $_POST['bus_code'];
		$date_of_com = $_POST['date_of_com'];
		$pemail = $_POST['pemail'];
		$ptel = $_POST['ptel'];
		
		
		
		$sql = "INSERT INTO `personal`(`user_full_name`, `reg_card_no`, `reg_date`, `Business_address`, `employment _address`, `business_line`, `business_code`, `date_of_comence`, `email`, `phone_number`) 
		VALUES ('$name','$regID','$regDate','$bus_address','$emp_address','$bus_line','$bus_code','$date_of_com','$pemail','$ptel ')";
		
		$result = mysqli_query($con,$sql);
		
		if($result){
			
			  $tingen = rand(987654,123456)."-001";
			
			echo $tingen;
			
			mail($to,$subject,$message);
			
		}
		
		
		 
	}		 




?>