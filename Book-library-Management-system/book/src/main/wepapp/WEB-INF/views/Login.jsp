<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
	<html>
    	<head>
  	    <title>Loginpage</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Konkhmer+Sleokchher&family=Poppins&display=swap');

*  {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
    cursor:pointer;

   }
body{
       height:82%;
       width:100%;
       display:flex;
       justify-content:center;
       align-items:center;
       background-image:url(login.jpg);
       background-size:cover;
     }

form{
     width:25rem;
     height:20rem;
     display:flex;
     flex-direction:column;
     background:pink;
     box-shadow:white;
     border-radius:10px;
     }

h1{
   font-size:50px;
   text-align:center;
   color:olive;
   letter-spacing:3px;
   opacity:.7; 
  }

label{
      font-size: 20px;
      margin-left:5%;
      text-shadow:2px;
      }

input{
      width:50%;
      margin-left:5%;
      margin-bottom:5%;
     }
a{
    font-size:15px;
}

form li a {
margin-left:40%;
}
</style>
    </head>
        <body> 
        		<form>
                     <h1>LOGIN</h1>
                 
                         <label>Username</label>
                         <input type ="username">

                         <label>Password</label>
                         <input type ="password">
                         
 						 <li> <a href ="start"> login   </a> </li>
					    
                         <a> Forget Password?</a>
                        
            </form>
        </body>
</html