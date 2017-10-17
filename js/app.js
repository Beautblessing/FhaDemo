
 

 






function createAccount(){
	
	var name = document.getElementById("pname").value;
	var regID = document.getElementById("regID").value;
	var regDate = document.getElementById("regDate").value;
	var bus_address = document.getElementById("bus_address").value;
	var emp_address = document.getElementById("emp_address").value;
	var bus_line = document.getElementById("bus_line").value;
	var bus_code = document.getElementById("bus_code").value;
	var date_of_com = document.getElementById("date_of_com").value;
	var pemail = document.getElementById("pemail").value;
	var ptel = document.getElementById("ptel").value;
	
	
	var respond = document.getElementById("respond");
	 
	 
	 
	 if(name.trim() == ""){
		 
		 alert("Enter Full name");
		 
		 return false;
		 
	 }else if(regID.trim() == ""){
		 
		  alert("Enter Registration Number");
		 
		 return false;
		 
	 }else if(regDate.trim() == ""){
		 
		  alert("Enter Registration Date");
		 
		 return false;
		 
	 }else if(bus_address.trim() == ""){
		 
		  alert("Enter Business Address");
		 
		 return false;
		 
	 }else if(bus_line.trim() == ""){
		 
		  alert("Enter Business line");
		 
		 return false;
		 
	 }else if(bus_code.trim() == ""){
		 
		  alert("Enter Business Code");
		 
		 return false;
		 
	 }else if(date_of_com.trim() == ""){
		 
		  alert("Enter Date of Commencement");
		 
		 return false;
		 
	 }else if(pemail.trim() == ""){
		 
		  alert("Enter Email");
		 
		 return false;
		 
	 }else if(ptel.trim() == ""){
		 
		  alert("Enter Tel");
		 
		 return false;
		 
	 }else{
		 
		  var formdata = new FormData(); 
		
			 formdata.append("name", name); 
			 formdata.append("regID", regID); 
			 formdata.append("regDate", regDate); 
			 formdata.append("bus_address", bus_address); 
			 formdata.append("emp_address", emp_address); 
			 formdata.append("bus_line", bus_line); 
			 formdata.append("bus_code", bus_code); 
			 formdata.append("date_of_com", date_of_com); 
			 formdata.append("pemail", pemail); 
			 formdata.append("ptel", ptel); 
			  
			  alert("Tin Generation was successful");
					
			 respond.innerHTML ="<center><h3 style='color:green'> Your Tin Have been Sent to your Email Address <h3></center>";
				
			
			// if(window.XMLHttpRequest){
				
				// xmlhttp = new XMLHttpRequest();

			// }else{
				// xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			// }
			
				// xmlhttp.onreadystatechange = function(){
				// if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
					
					//alert(xmlhttp.responseText);
					
					// alert("Tin Generation was successful");
					
					// respond.innerHTML ="<center><h3 style='color:green'> Your Tin Have been Sent to your Email Address <h3></center>";
				
				// }else{
					
					// respond.innerHTML ="<center><img src='images/ajax-loader.gif' class='ima-responsive'></center>";
				
				// } 
			
			// }
			
			// xmlhttp.open("POST","appengine/creatpersonal.php", true);
			
			// xmlhttp.send(formdata);
	 }
 
	 
	
}













function creatcompany(){
	
	var cname = document.getElementById("cname").value;
	var caddress = document.getElementById("caddress").value;
	var regcno = document.getElementById("regcno").value;
	var rcno = document.getElementById("rcno").value;
	var cemail = document.getElementById("cemail").value;
	var ctel = document.getElementById("ctel").value;
	var ccode = document.getElementById("ccode").value;
	var nature_business = document.getElementById("nature_business").value;
	var cert = document.getElementById("cert").value;
 
	
	var respond = document.getElementById("respondcompany333");
	 
	 
	 
	 if(cname.trim() == ""){
		 
		 alert("Enter Company's Name");
		 
		 return false;
		 
	 }else if(caddress.trim() == ""){
		 
		  alert("Enter Company's Address");
		 
		 return false;
		 
	 }else if(regcno.trim() == ""){
		 
		  alert("Enter Company's Registration No");
		 
		 return false;
		 
	 }else if(rcno.trim() == ""){
		 
		  alert("Enter Company's Registration Date");
		 
		 return false;
		 
	 }else if(cemail.trim() == ""){
		 
		  alert("Enter Company's Email");
		 
		 return false;
		 
	 }else if(ctel.trim() == ""){
		 
		  alert("Enter Company's Tel");
		 
		 return false;
		 
	 }else if(ccode.trim() == ""){
		 
		  alert("Enter Company Code");
		 
		 return false;
		 
	 }else if(nature_business.trim() == ""){
		 
		  alert("Enter Nature of Business");
		 
		 return false;
		 
	 }else if(cert.trim() == ""){
		 
		  alert("Enter Tel");
		 
		 return false;
		 
	 }else{
		 
		  var formdata = new FormData(); 
		
			 formdata.append("name", cname); 
			 formdata.append("caddress", caddress); 
			 formdata.append("regcno", regcno); 
			 formdata.append("rcno", rcno); 
			 formdata.append("cemail", cemail); 
			 formdata.append("ctel", ctel); 
			 formdata.append("ccode", ccode); 
			 formdata.append("nature_business", nature_business); 
			 formdata.append("cert", cert); 
			 
				alert("Tin Generation was successful");
					
				respond.innerHTML ="<center><h3 style='color:green'> Your Tin Have been Sent to your Email Address <h3></center>";
				
			
			// if(window.XMLHttpRequest){
				
				// xmlhttp = new XMLHttpRequest();

			// }else{
				// xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			// }
			
				// xmlhttp.onreadystatechange = function(){
				// if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
					
					// alert(xmlhttp.responseText);
					
					// alert("Tin Generation was successful");
					
					// respond.innerHTML ="<center><h3 style='color:green'> Your Tin Have been Sent to your Email Address <h3></center>";
				
				// }else{
					
					// respond.innerHTML ="<center><img src='images/ajax-loader.gif' class='ima-responsive'></center>";
				
				// } 
			
			// }
			
			// xmlhttp.open("POST","appengine/creatcompany.php", true);
			
			// xmlhttp.send(formdata);
	 }
 
	 
	
}






function loginfuc(){
	 
	 
	var logintin = document.getElementById("logintin").value;
	var loginpassword = document.getElementById("loginpassword").value;
	 
	 
	 if(logintin.trim() == ""){
		 
		 alert("Enter Tin Number");
		 return false;
		 
	 }else if (loginpassword.trim() == ""){
		 
		  alert("Enter Password");
		 return false;
		 
	 }else{
	 
	 window.location='#dash';
	 }
 }
 
 
 
 



 function regdatalogin(){
	 
	 
	var bus_per_name = document.getElementById("bus_per_name").value;
	var BP_tin = document.getElementById("BP_tin").value;
	var BP_email = document.getElementById("BP_email").value;
	var BP_passwordp = document.getElementById("BP_passwordp").value;
	var BP_password2 = document.getElementById("BP_password2").value;
	 
	 
	 if(bus_per_name.trim() == ""){
		 
		 alert("Enter Business name or Your Full Name");
		 return false;
		 
	 }else if (BP_tin.trim() == ""){
		 
		  alert("Enter Tin Number");
		 return false;
		 
	 }else if (BP_email.trim() == ""){
		 
		  alert("Enter Email");
		 return false;
		 
	 }else if (BP_passwordp.trim() == ""){
		 
		  alert("Enter Password");
		 return false;
		 
	 }else if (BP_password2.trim() == ""){
		 
		  alert("Enter Confirm Password");
		 return false;
		 
	 }else{
	 
	 window.location='#dash';
	 }
 }
 
 
 
 
 
 
 
 
 
 
 
 




function contactus(){
	
		var form = document.getElementById("contactfrom");
		var error = document.getElementById("contactreplay");
		
		
		var name = document.getElementById("conname").value;
		var email = document.getElementById("conemail").value;
		var message = document.getElementById("conmessage").value;
		 
		
		if(name.length < 4){
		
			alert("Please Enter a valid Full Name");
			
			return false ;
			
		}else if(email.length < 10){
		
			alert("Please Enter a valid Email ");
			
			return false ;
			
		}else if(message.length < 10){
		
			alert("Message should be more than 10 characters");
			
			return false ;
			
		}else{
		
		 var formdata = new FormData(); 
		
		 formdata.append("name", name); 
		 formdata.append("email", email); 
		 formdata.append("message", message); 
		
			if(window.XMLHttpRequest){
				
				xmlhttp = new XMLHttpRequest();

			}else{
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			
				xmlhttp.onreadystatechange = function(){
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
					alert(xmlhttp.responseText);
					alert("Thanks... your Message Have been Sent");
				} 
			
			}
			//xmlhttp.open("POST","http://tahirguestpalace.com/app/contact.php", true);
			
			xmlhttp.send(formdata);
			
		 }
	
	 }
	
	