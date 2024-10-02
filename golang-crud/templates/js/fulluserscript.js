$(document).ready(function(){
alert("hai")    
$.ajax({
        url: "/api/fulldetail" ,
        type: "GET",
        datatype: "json",
        success: function (response) {
          $.each(response, function (name, elementjson) {
            $.each(elementjson, function (index, element) {
                console.log(element)
//var data=`<tr><td>`element`</td><td>`element.firstname`</td><td>`element.lastname`</td><td>`element.email`</td><td>`element.phonenumber`</td> </tr>`
              $(".userpage").append(data);
            });
          });
          
        },
        error: function (errorMessage) {
          $("#errormsg").html(errorMessage.responseJSON.Error);
        },
      });
    
  });
  