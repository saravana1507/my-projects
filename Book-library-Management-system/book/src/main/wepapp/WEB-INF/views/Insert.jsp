<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

      <head> 
<style>
@import url('https://fonts.googleapis.com/css2?family=Konkhmer+Sleokchher&family=Poppins&display=swap');

*{
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
    cursor:pointer;
 }
h3{ 
   font-size:50px;
   color:Red;
   letter-spacing:3px;
  }
    
body{
       height:82%;
       width:85%;
       display:flex;
       justify-content:center;
       align-items:center;   
}

label{
    font-size:20px;
    color:green;
}
body form li a {
text-decoration:none;
}
li a {
text-decoration:none;
}
</style>

      </head>
       	 <body>
        	           		
           		<form action ="insertpage">
           		
           		<form>
           			<h1>Hi ${Books.book_id},${Books.book_name}inserted </h1>
             	
           		<h3>Insert the Book Properties</h3>
           		    
                <label>Book ID :</label> 
                <input type="text" name="book_id"  placeholder="Enter the Book Id"><br><br>

                <label> Book name :</label>
                <input type="text" name="book_name"  placeholder="Enter the book name"><br><br>

                <label> Author name :</label>
                <input type="text" name="author_name"  placeholder="Enter the author name"><br><br>

                <label> Publisher name :</label>
                <input type="text" name="publisher"  placeholder="Enter the publisher name"><br><br>

                <label> Published year :</label>
                <input type="text" name="published_year" placeholder="Enter the published year"><br><br>

                <label> Book price :</label>
                <input type="text" name="book_price"  placeholder="Enter the Book price"><br><br>
               
                              
			     <li> <a href ="loginpage"> Home   </a> </li>
			     
			     <li> <a href ="insertpage"> insert  </a> </li>
			     
			     <li> <a href ="start"> back  </a> </li><br>
			     
              </form>
          </form>
        </body>
</html>



