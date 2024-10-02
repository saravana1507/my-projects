<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Frontpage</title>
<style>
       <!-- <link rel ="stylesheet " href =sidemenu.css>-->
*{
margin:0;
font-family:sans-serif;
text-decoration:none;
list-style:none;
font-weight:bold;
}

.nav{
width:100%;
height:50px;
background-color:black;
}

span{
color:yellow;
font-size:1.5rem;
padding-left:20px;
line-height:50px;
}
.nav u1{
float:right;
margin-right:20px;
}

.nav u1 li {
display:inline-block;
margin:0 10px;
line-height:50px;
}

.nav u1 li a {
color: white;
padding: 15px 10px;
text-decoration:none;
}

.nav u1 li a: hover
{
border-bottom:red;
}

body h1{
text-align:center;
}
body{
background-image: url(frontpage.jpg);
background-size:cover;
}
</style>
    </head>
            <body>
                  <nav class="nav">
                        <span>LOGO</span>

                                <u1>
                                	
                                    <li> <a href ="loginpage"> Home   </a> </li>
                                    <li> <a href ="mainpage"> Insert   </a> </li>
                                    <li> <a href ="updatepage"> Update </a> </li>
                                    <li> <a href ="deletepage"> Delete </a> </li>
                                    <li> <a href ="displaypage"> Display </a> </li>     
                                    <li> <a href ="loginpage"> Back  </a> </li>
                                </u1>
                                   <h1> WELCOME TO BOOK LIBRARY </h1> 
                                       
                  </nav>          
            </body>
</html>

