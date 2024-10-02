$("#formValidation").validate({  
    rules:{
     userid:{
         digits:true
     }
    },
     messeges:{
        userid:{
          required:"Please enter your userId",
          digits:"please enter onlt digits",
        },
    },
        submitHandler: function(form) {
            $.ajax({
                url: "finddetail/"+$("#userid").val()+"?userid",
                type: "GET",
                datatype:"json",
                success: function() {
                    $("#exampleModalCenter").modal("show")
                    $("#click").click(function(){
                        $("#exampleModalCenter").modal("hide")
                           $.ajax({
                            url: "deletedetail/"+$("#userid").val()+"?userid",
                            type: "DELETE",
                            datatype:"json",
                            success: function() {
                                $(".message").html("delete successfully");
                            },         
                                });	

                    })
                },
                 error: function () {
                  $(".errormsg").html("cannot find id");
                },          
                 });
           
                  
            }
          });