$(document).ready(function(){
  var data = localStorage.getItem("object_name");
 localStorage.clear(); //clean the localstorage
     $("#uid").val( JSON.parse(data).id)
     $("#ufirstname").val( JSON.parse(data).firstname)
     $("#ulastname").val( JSON.parse(data).lastname)
     $("#uemail").val( JSON.parse(data).email)
     $("#uphonenumber").val( JSON.parse(data).phonenumber)
})
$("#formValidation").validate({  
    rules:{
        userid:{
            digits:true
        },
     firstname:{
         minlength:2,
         namecheck:true
     },
     lastname:{
        namecheck:true  
    },
    email:{
        minlength:2,
        email:true
    },
    phonenumber:{
        minlength:10,
        digits:true
    },
    },
    messeges:{
        userid:{
            required:"Please enter your userId",
            digits:"please enter onlt digits",
          },
     firstname:{
       required:"Please enter your name",
       minlength:  "name at least 2 charactors",
     },
     lastname:{
        required:"Please enter your name",
      },
      email:{
        required:"Please enter your mail",
        email:  "Please enter valid email address",
      },
      firstname:{
        required:"Please enter your phone number",
        digits:"please enter onlt digits",
        minlength:  "name at least 10 numbers",
      },
     password:{
       required:"please enter your password",
       minlength:"password at least 7 charactors"
     }
    },
    submitHandler: function(form) {         
     
      $.ajax({
          url: "updatedetail",
          type: "PUT",
          data: $(form).serialize(),
          datatype:"json",
          success: function(response) {
            console.log(response)
            $(".message").html(response.Message);
          },
           error: function (errorMessage) {
            console.log(errorMessage.responseJSON.Error)
            $(".errmsg").html(errorMessage.responseJSON.Error);
          },          
              });	  
            
      }
    });
 
    
    $.validator.addMethod("namecheck", function(value) {
        return /^[A-Za-z]+$/.test(value) 
     },'Please enter only letters');

