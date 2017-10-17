<?php

include("DB_connection.php");



	if(isset($_GET["id"])){
		
		 
			$view_id = $_GET["id"];
			
			$sql = "SELECT * FROM `fashion_post` WHERE  `fashion_post_id` ='$view_id'  LIMIT 1";
						
						$result = mysqli_query($con,$sql);
					
						$num = mysqli_num_rows($result);

						if($num > 0){
							
						 while($rows = mysqli_fetch_assoc($result)){
								 
								 extract($rows);
								 
							?>
							
							 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 Afeedcontent">
									<div class="eagle-gallery img300">
										<div class="owl-carousel">
											<?php 
											  $images = explode(',',$fashion_post_image);
											    foreach($images as $image){
												 ?>
												 <img  src="../members/<?php echo $fashion_post_user;?>/uploads/<?php echo $image;?>" data-medium-img="members/<?php echo $fashion_post_user;?>/uploads/<?php echo $image;?>" data-big-img="members/<?php echo $fashion_post_user;?>/uploads/<?php echo $image;?>" data-title="<a class='btn btn-default'  href='members/<?php echo $fashion_post_user;?>/uploads/<?php echo $image;?>'download >Download</a>"  alt="">
												<?php } ?>
										 </div>
									</div> 
										  <div class="postdetails">
												<h3   class="A-title"><?php echo $fashion_post_title;?></h3>
												<p   ><?php echo $fashion_post_content;?></p>
												<hr class="hr"/>
												<div class="postcontent">
													<p>
													<?php 
													  $categorys = explode(',',$fashion_post_category);
														foreach($categorys as $category){
														 ?>
														 <a href="category.php?cat=<?php echo $category;?>" class="category"><?php echo ucfirst($category);?></a>
														 <?php } ?>
														 
														 <a href="category.php?cat=<?php echo $fashion_post_country;?>" class="pull-right"><?php echo ucfirst($fashion_post_country);?></a>
														 
													 </p>
										 	
												</div><br/>
										 
											<div class="clear"></div>
										 </div>
											
											
								 </div>
							
							
							
							
							
							
							<?php	 
							}
						 
						}
			
		 
		 
	 }else{
			
		 echo "there was an error";
		 
		}






?>