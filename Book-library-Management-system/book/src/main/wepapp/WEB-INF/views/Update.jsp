<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
			<html>			
    <head>
        <title>Updatepage</title>
<style>
body{
text-align:center;
color:blue;
background-image:url(Update.jpeg);
background-size:cover;
}
form{
color:red;
}
</style>
    </head>
			<body>
                <h1>UPDATE PAGE</h1>
				<form>
			  		<label> Book ID :</label>
   			 		<input type="text" name="book_id"  placeholder="Enter the Book Id"><br><br>

    				<label> Book name :</label>
   			 		<input type="text" name="book_id"  placeholder="Enter the book name"><br><br>
				</form>
										
					<form action ="updatesuccess">
					<input type ="submit" value ="Conform">
					</form><br>
					
					<form action ="start">
					<input type ="submit" value="Back">
					</form>
			</body>
</html>





