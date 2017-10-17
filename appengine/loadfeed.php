<?php

include("DB_connection.php");



 
			$sql = "SELECT * FROM `fashion_post`  WHERE `fashion_post_category` NOT LIKE '%hairstyle%' ORDER BY fashion_post_id DESC";
						
			$result = mysqli_query($con,$sql);
					
			$num = mysqli_num_rows($result);	
			 
			if($num > 0){
				
				
				 while($rows = mysqli_fetch_assoc($result)){
								 
						 extract($rows);
						 
					?>
					
					
					
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 feedcontent item">
									 <div id="post<?php echo $fashion_post_id;?>" class="postimg">
										<div class="theimage">
											<?php 
											  $images = explode(',',$fashion_post_image);
											     ?>
												<a  href="#view_post" data-transition="pop" onclick="loadApost(<?php echo $fashion_post_id;?>)"> 
												
													<img  src="../members/<?php echo $fashion_post_user;?>/uploads/<?php echo $images['0'];?>" class="post_img img-responsive">
												</a>
												<a href="view_post.php?id=<?php echo $fashion_post_id;?> " class="pull-right link-color" data-transition="pop">View Gallery &nbsp;</a>
											
										 </div>
										 <hr class="hr"/>
											
										 <div class="postcontent">
										  <a href="view_post.php?id=<?php echo $fashion_post_id;?>" data-transition="pop">
											<span><h4 class="post-title"><?php echo  $fashion_post_title;?> </h4></span>
										 </a>
									
                                            <div class="postdetails">
                                               <p><a href="view_post.php?id=<?php echo $fashion_post_id;?>" data-transition="pop"> <span itemprop="articleBody"><?php echo substr($fashion_post_content,0,400);?> </span> </a></p>
												<a href="view_post.php?id=<?php echo $fashion_post_id;?>" class=" pull-right" data-transition="pop"> Read More</a>
											 <p>
											<?php 
											  $categorys = explode(',',$fashion_post_category);
											    foreach($categorys as $category){
												 ?>
												 <a class="link-color" data-transition="pop" href="category.php?cat=<?php echo $category;?>" class="category"><?php echo ucfirst($category.",");?></a>
												 <?php } ?>
											 </p>

											</div>
											
											
										 </div>
									</div>
						</div>
					
					
					
					
					
					
					
					<?php	 
								 
				 }	  
 
			 }else{
				
				echo "No data found";
				
			}
							
							 







?>