<?php
header('Access-Control-Allow-Origin: *'); //should work in cross domain ajax clling request
@mysql_connect("localhost","root","");
mysql_select_db("firstaxdrive");
 
if(isset($_GET['type']))
{
	if($_GET['type'] == "login")
	{
		$username = $_GET['username'];
		$password = $_GET['password'];

	/*	print_r($_GET);*/

		$query = "Select * from user Where username='$username' and password='$password'";

		$result1 = mysql_query($query);

		$totalRows = mysql_num_rows($result1);

		if($totalRows > 0)
		{
			$recipes = array();
			while($recipe = mysql_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = array('User'=>$recipe);
			}
			$output = json_encode(array('Users' => $recipes ));
			echo $output;
		}
		else{
			echo "wrong login credentials";
		}
	}
else if($_GET['type'] == "registration")
{
	$username = $_GET['username'];
	$password = $_GET['password'];

//Create Query

	$query ="Insert into user VALUES (NULL,'$username', '$password')";
	
	//FIRE YOUR QUERY AGAINST DATABASE
		$result1 = mysql_query($query);

		if($result1)
		{

		$recipes["Success"] = true;
		$recipes["Code"] = $username . " " . "has been successfully registered";

		$output = json_encode(array('Users' => $recipes));

		echo $output;
		}
		else{
			echo "Error while inserting the record." . mysql_error();
		}
	}
else if($_GET['type'] == "updateinfo")
{
	$username = $_GET['username'];
	$password = $_GET['password'];

	$query = "Update user set Password='$password' where username = '$username'";

	$result1 =mysql_query($query);
	if($result1)
	{
		$recipes["Success"] = true;
		$recipes["Code"] = 200;

		$output = json_encode(array('Users' => $recipes ));
		echo $output;
	}
	else
	{
		echo "Got Error while Updating the Records.";
	}
}
else if($_GET['type'] == "delete")
{
	$username = $_GET['username'];
	$query = "delete from user where username = '$username'";

	$result1 =mysql_query($query);
	if($result1)
	{
		$recipes["Success"] = true;
		$recipes["Code"] = 200;

		$output = json_encode(array('Users' => $recipes ));
		echo $output;
	}
	else
	{
		echo "Got Error while deleting Record.";
	}
}

}
else
{
	echo "Invalid Format";
}
?>