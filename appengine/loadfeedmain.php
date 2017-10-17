<?php

include("DB_connection.php");



 
			$sql = "SELECT * FROM `fashion_post`  WHERE `fashion_post_category` NOT LIKE '%hairstyle%' ORDER BY fashion_post_id DESC";
						
			$result = mysqli_query($con,$sql);
					
			$num = mysqli_num_rows($result);	
			 
			if($num > 0){
				
				$array_post = array();
				
				 while($rows = mysqli_fetch_assoc($result)){
								 
						$array_post[] = $rows;
					 			 
				 }	 

				echo json_encode($array_post);
				 
 
			 }else{
				
				echo "No data found";
				
			}
							
							 







?>