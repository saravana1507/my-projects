<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Delete JSP</title>
			<style>
			h1{
			    font-size:250%;
			    text-align:center;
			    color:red;
			   }
			body{
				  text-align:center;
			      background-image:url(/demo/src/main/webapp/WEB-INF/views/display.jpg);
			      background-size:cover;
			    }
		    </style>	
	</head>
			<body>
			       <h1>DELETE THE ELEMENTS</h1>
					<form>
					<label> Book ID :</label>
					<input type="text" name="book_id"  placeholder ="Enter the book id"> <br></br>
					
					<label> Book Name :</label>
					<input type="text" name="book_name"  placeholder ="Enter the book name"> <br></br>
					</form>

			        <form action ="deletesuccess">
					<input type ="submit" value ="Conform">
					</form><br>
					
					<form action ="deletepage">
					<input type ="submit" value ="Cancel">
					</form><br>
					
		            <form action ="start">
					<input type ="submit" value ="Back">
					</form>
					
			</body>
</html>
