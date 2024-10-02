$("#formValidation").validate({
  rules: {
    userid: {
      digits: true,
    },
  },
  messeges: {
    userid: {
      required: "Please enter your userId",
      digits: "please enter onlt digits",
    },
  },
  submitHandler: function (form) {
    $.ajax({
      url: "finddetail/" + $("#userid").val() + "?Userid",
      type: "GET",
      datatype: "json",
      success: function (response) {
        $("#errormsg").hide();
        $("#userbody").show();
        $.each(response, function (name, elementjson) {
          $.each(elementjson, function (index, element) {
            $("#" + index).html(element);
          });
          localStorage.setItem("object_name", JSON.stringify(elementjson));
        });
        
      },
      error: function (errorMessage) {
        $("#userbody").hide();
        $("#errormsg").show();
        $("#errormsg").html(errorMessage.responseJSON.Error);
      },
    });
  },
});
