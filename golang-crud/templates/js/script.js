
$("#formValidation").validate({  
    rules:{
     firstname:{
         minlength:2,
         namecheck:true
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
     password:{
       required:"please enter your password",
       minlength:"password at least 7 charactors"
     }
    },
    submitHandler: function(form) {   
      $.ajax({
          url: "loginpage",
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
