<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	 <head>
		<meta charset="UTF-8">
		<title>Displaypage</title>
<style>
h3{
color:black;
text-align:center;
}
body{
color:green;
text-align:center;
background-image:URL(display.jpg);
background-size:cover;
}

</style>
		</head>
      			<body>
                <h3>DISPLAY PAGE</h3>
                
                <h3>Hi ${studentDetails} </h3><br>
           
		        <form>
		        <label> BOOK ID : </label>
		        <input type ="text" name ="book_id"  placeholder="Enter the book id" ><br> </br>
		        </form>
		
		        <form>
		        <label> BOOK NAME :</label>
		        <input type ="text" name ="book_name" placeholder="Enter the book name"><br></br>
		        </form>
		
		        <form action ="displaypage">
		        <input type ="submit" value ="Conform">
		        </form><br>
		
		        <form action ="displaypage">
		        <input type ="submit" value ="BACK">
		        </form><br>
		        
		        <form action ="start">
		        <input type ="submit" value ="MAINMENU">
		        </form>
   		</body>
</html>
	