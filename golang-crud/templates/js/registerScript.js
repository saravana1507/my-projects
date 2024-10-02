
$("#formValidate").validate({  
    rules:{
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
     password:{
       minlength:7,
       maxlength:13,
       passwordFormatCheck:true
     }
    },
    messeges:{
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
      console.log($("#formValidate").serialize())         
      $.ajax({
          url: "savedetails",
          type: "POST",
          data: $(form).serialize(),
          datatype:"json",
          success: function(response) {
            window.location.replace("api/home")
          },
           error: function (errorMessage) {
            $(".errmsg").html(errorMessage.responseJSON.Value);
          },          
              });	  
            
      }
    });
 
    




$.validator.addMethod("namecheck", function(value) {
     return /^[A-Za-z]+$/.test(value) 
  },'Please enter only letters');
 
$.validator.addMethod("passwordFormatCheck", function(value, element) {
   return this.optional(element) || /^(?=.*\d)(?=.*[A-Z])(?=.*\W).*$/i.test(value);
 }, 'Password must contain one capital letter,one numerical and one special character');
 




//password icon function
function iconButton(mobileid) {
    let passwordShow = $("#" + mobileid).attr("type");
    if (passwordShow == "password") {
        $("#" + mobileid + "icon").html(
            ' <img src="/templates/image/eye-slash.svg" alt="" height="auto" width="20px" style="margin-top: 4px;"/>'
        );
        $("#" + mobileid).attr("type", "text");
    } else {
        $("#" + mobileid + "icon").html(
            ' <img src="/templates/image/eye.svg" alt="" height="auto" width="20px" style="margin-top: 4px;"/>'
        );
        $("#" + mobileid).attr("type", "password");
    }
}
