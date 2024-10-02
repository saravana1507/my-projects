      /// signup form validation
      function signupButton() {
        // name validation
        let username = $("#signupName").val();
        let checkName = /[a-zA-Z]$/;
        if (username == "") {
          $("#nameError")
            .css({ display: "block", color: "red" })
            .text("* please enter your Name"); 
            $("#signupName").focus();
          $("#signupfield_error").css("display", "block");
        } else if (!username.match(checkName)) {
          $("#nameError")
            .css({ display: "block", color: "red" })
            .text("* Please enter only Letters");
            $("#signupName").focus();
        } else {
          $("#nameError").css("display", "none");

          //Email validation
          let mail = $("#signupMail").val();
          let checkMail = /[a-zA-Z0-9_.]+\@[a-z]+\.[a-z]{2,3}$/;
          if (mail == "") {
            $("#mailError")
              .css({ display: "block", color: "red" })
              .text("* please Enter your Email");
              $("#signupMail").focus();
          } else if (!mail.match(checkMail)) {
            $("#mailError")
              .css({ display: "block", color: "red" })
              .text("* Please enter a valid Email address");
              $("#signupMail").focus();
          } else {
            $("#mailError").css("display", "none");

            // Password validation
            var password = $("#signupPassword").val();
            let checkPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,13}$/;
            if (password == "") {
              $("#passwordError")
                .css({ display: "block", color: "red" })
                .text("* Please enter a Password");
                $("#signupPassword").focus();
            } else if (password.length < 8) {
              $("#passwordError")
                .css({ display: "block", color: "red" })
                .text("* Please enter a minimum  8 letters");
                $("#signupPassword").focus();
            } else if (!checkPassword.test(password)) {
              $("#passwordError")
                .css({ display: "block", color: "red" })
                .text(
                  "* Please enter at least 8 characters, both upper and lower case and at least 1 digit"
                );
                $("#signupPassword").focus();
            } else {
              $("#passwordError").css({ display: "none" });

              //Re-enter Password
              let reEnterPassword = $("#signupRepassword").val();
              if (reEnterPassword == "") {
                $("#reEnterPasswordError")
                  .css({ display: "block", color: "red" })
                  .text("* Please enter a Password");
                  $("#signupRepassword").focus();
              } else if (reEnterPassword.length != password.length) {
                $("#reEnterPasswordError")
                  .css({ display: "block", color: "red" })
                  .text("* Password length mismatch");
                  $("#signupRepassword").focus();
              } else if (reEnterPassword != password) {
                $("#reEnterPasswordError")
                  .css({ display: "block", color: "red" })
                  .text("* Password mismatch");
                  $("#signupRepassword").focus();
              } else {
                $("#reEnterPasswordError").css({ display: "none" });

                //number validation
                let mobilenumber = $("#signupNumber").val();
                let checknum = /^[7-9]+[0-9]{9}$/;
                if (mobilenumber == "") {
                  $("#mobileNumberError")
                    .css({ display: "block", color: "red" })
                    .text("* Please enter the mobile number");
                    $("#signupNumber").focus();
                } else if (mobilenumber.length != 10) {
                  $("#mobileNumberError")
                    .css({ display: "block", color: "red" })
                    .text("* Please  enter 10 digit number");
                    $("#signupNumber").focus();
                } else if (!mobilenumber.match(checknum)) {
                  $("#mobileNumberError")
                    .css({ display: "block", color: "red" })
                    .text("* Please  start with 7 to 9");
                    $("#signupNumber").focus();
                } else {
                  $("#mobileNumberError").css("display", "none");

                  //Address validation
                  let address = $("#signupAddress").val();
                  if (address == "") {
                    $("#addressError")
                      .css({ display: "block", color: "red" })
                      .text("* Enter the Address");
                      $("#signupNumber").focus();
                  } else {
                    $("#addressError").css("display", "none");

                    //gender validation
                    let gender = $("input[name=gender]:checked").val();
                    if (gender == null) {
                      $("#genderError")
                        .css({ display: "block", color: "red" })
                        .text("* Select the genter");

                    } else {
                      $("#genderError").css("display", "none");

                      // choices mobiles validation
                      let choice = [];
                      $("input[name=choice]:checked").each(function () {
                        choice.push(this.value);
                      });
                      if (choice == "") {
                        $("#choiceError")
                          .css({ display: "inline", color: "red" })
                          .text("* Please click the choice");
                      } else {
                        $("#choiceError").css("display", "none");

                        //select the city validation
                        let choicecity = $("#signup_branch option:selected").text();
    
                        if (choicecity == "select option") {
                          $("#branchError")
                            .css({ display: "inline", color: "red" })
                            .text("* please click the option");
                        } else {
                          $("#branchError").css("display", "none");

                          $("#signupmodal").hide();
                          $(".modal-backdrop").css("display", "none");
                          $("#loginmodal").modal("show");
                          //save the details in login
                          $("#username").val(username);
                          $("#userPassword").val(password);

                          //save the details in profile page

                          $("#profileName").text(username);
                          $("#profileMail").text(mail);
                          $("#profileMobileNumber").text(mobilenumber);
                          $("#profileAddress").text(address);
                          $("#profileGender").text(gender);
                          $("#profileMobilechoice").text(choice);
                          $("#profileBranch").text(choicecity);

                          //update the datails in profile
                          $("#updateName").val(username);
                          $("#updateMail").val(mail);
                          $("#updatePassword").val(password);
                          $("#updateNumber").val(mobilenumber);
                          $("#updateAddress").val(address);

                          $("#" + gender).attr("checked", "true");

                          for (let n of choice) {
                            $("#" + n).attr("checked", "true");
                          }

                          $("#updateBranch option:selected").text(choicecity);

                          //Sara123@
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      // login button function

      var check_login = false;
      function loginbutton() {
        var login_username=$("#username").val();
        var username_check=/[A-Za-z]$/;
        if(login_username=="")
        {
          $("#login_nameError").css({display:"block",color: "red"}).text("* Please enter your name");
          $("#username").focus(); 
        }else if(!login_username.match(username_check)){
          $("#login_nameError").css({display:"block",color: "red"}).text("* Please enter only Letters");
          $("#username").focus(); 
        }
        else{
          $("#login_nameError").css("display","none");

          var login_password=$("#userpassword").val();
          var check_loginPassword=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,13}$/;

          if(login_password=="")
          {
            $("#login_passwordError").css({display:"block",color: "red"}).text("* Please enter your Password");
            $("#userPassword").focus();
          }
          else if(!check_loginPassword.test(login_password)){
            $("#login_passwordError").css({display:"block",color: "red"}).text("* Please enter at least 8 characters, both upper and lower case and at least 1 digit");
            $("#userPassword").focus();
          }
          else{
            $("#login_passwordError").css("display","none");
            $("#loginicon").html(
              '<img src="./image/dropdown/person-circle.svg" height="auto" width="35px">'
            );
            $("#cart_icon").html(
              '<img src="./image/dropdown/cart-fill.svg" height="auto" width="35px" >'
            );
            $("#loginNavbar").attr({
              "data-bs-target": "",
              "data-bs-toggle": "dropdown",
            });
            $("#loginmodal").hide();
            $(".modal-backdrop").css("display", "none");
            check_login = true;
          }


        }

  
      }


      //edit detail function

      function updateDatails() {
        let updateUsername = $("#updateName").val();
        let updateCheckName = /[a-zA-Z]$/;
        if (updateUsername == "") {
          $("#updateNameError")
            .css({ display: "block", color: "red" })
            .text("* please enter your Name");
            $("#updateName").focus();
        } else if (!updateUsername.match(updateCheckName)) {
          $("#updateNameError")
            .css({ display: "block", color: "red" })
            .text("* Please enter only Letter");
            $("#updateName").focus();
        } else {
          $("#updateNameError").css("display", "none");

          //Email validation
          let updateMail = $("#updateMail").val();
          let updateCheckMail = /[a-zA-Z0-9_.]+\@[a-z]+\.[a-z]{2,3}$/;
          if (updateMail == "") {
            $("#updateMailError")
              .css({ display: "block", color: "red" })
              .text("* please Enter your Email");
              $("#updateMail").focus();
          } else if (!updateMail.match(updateCheckMail)) {
            $("#updateMailError")
              .css({ display: "block", color: "red" })
              .text("* Please enter a valid Email address");
              $("#updateMail").focus();
          } else {
            $("#updateMailError").css("display", "none");
            //mobile number validation
            let upadateMobilenumber = $("#updateNumber").val();
            let updateChecknum = /^[7-9]+[0-9]{9}$/;
            if (upadateMobilenumber == "") {
              $("#updateMobileNumberError")
                .css({ display: "block", color: "red" })
                .text("* Please enter the mobile number");
                $("#updateNumber").focus();
            } else if (upadateMobilenumber.length != 10) {
              $("#updateMobileNumberError")
                .css({ display: "block", color: "red" })
                .text("* Please  enter 10 digit number");
                $("#updateNumber").focus();
            } else if (!upadateMobilenumber.match(updateChecknum)) {
              $("#updateMobileNumberError")
                .css({ display: "block", color: "red" })
                .text("* Please  start with 7 to 9");
                $("#updateNumber").focus();
            } else {
              $("#updateMobileNumberError").css("display", "none");

              //Address validation
              let upadateAddress = $("#updateAddress").val();
              if (upadateAddress == "") {
                $("#updateAddressError")
                  .css({ display: "block", color: "red" })
                  .text("* Enter the Address");
                  $("#updateAddress").focus();
              } else {
                $("#updateAddressError").css("display", "none");

                //gender validation
                let updateGender = $("input[name=gender]:checked").val();
                if (updateGender == null) {
                  $("#updateGenderError")
                    .css({ display: "block", color: "red" })
                    .text("* Select the genter");
                } else {
                  $("#updateGenderError").css("display", "none");

                  // choices mobiles validation
                  let updateChoice = [];
                  $("input[name=UpdateChoice]:checked").each(function () {
                    updateChoice.push(this.value);
                  });
                  console.log(updateChoice);
                  if (updateChoice == "") {
                    $("#updateChoiceError")
                      .css({ display: "inline", color: "red" })
                      .text("* Please click the choice");
                  } else {
                    $("#updateChoiceError").css("display", "none");

                    //select the city validation
                    let updateChoicecity = $("#updateBranch option:selected").text();
                    console.log(updateChoicecity);
                    if (updateChoicecity == "select option") {
                      $("#updateBranchError")
                        .css({ display: "inline", color: "red" })
                        .text("* please click the option");
                    } else {
                      $("#updateBranchError").css("display", "none");

                      $("#updateModel").hide();
                      $(".modal-backdrop").css("display", "none");
                      $("#profileModal").modal("show");

                      //save the details in profile page

                      $("#profileName").text(updateUsername);
                      $("#profileMail").text(updateMail);
                      $("#profileMobileNumber").text(upadateMobilenumber);
                      $("#profileAddress").text(upadateAddress);
                      $("#profileGender").text(updateGender);
                      $("#profileMobilechoice").text(updateChoice);
                      $("#profileBranch").text(updateChoicecity);
                    }
                  }
                }
              }
            }
          }
        }
      }


      // Log out button
      function logout() {
        $("#loginicon").text("Login");
        location.reload(true);
        $("#loginNavbar").attr({
          "data-bs-target": "#loginmodal",
          "data-bs-toggle": "modal",
        });
      }


      //change password validation
      function changePasswordButton() {
        let signup_password = $("#signupPassword").val();
        let check_Oldpassword = $("#changeOldpassword").val();
        if (check_Oldpassword == "") {
          $("#changeoldpasswordError")
            .css({ display: "block", color: "red" })
            .text("* Please enter the password ");
        } else if (check_Oldpassword != signup_password) {
          $("#changeoldpasswordError")
            .css({ display: "block", color: "red" })
            .text("* Please enter the correct password ");
        } else {
          $("#changeoldpasswordError").css({ display: "none" });

          //new password validation
          let changecheckPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,13}$/;
          let newpassword = $("#changenewpassword").val();
          if (newpassword == "") {
            $("#changenewpasswordError")
              .css({ display: "block", color: "red" })
              .text("* Please enter the password ");
          } else if (newpassword.length < 8) {
            $("#changenewpasswordError")
              .css({ display: "block", color: "red" })
              .text("* Please enter at least 8 characters");
          } else if (!changecheckPassword.test(newpassword)) {
            $("#changenewpasswordError")
              .css({ display: "block", color: "red" })
              .text(
                "* Please enter at least 8 characters, both upper and lower case and at least 1 digit"
              );
          } else {
            $("#changenewpasswordError").css({ display: "none" });

            //re enter password validation
            let rePassword = $("#changeRenewpassword").val();
            console.log(rePassword);
            if (rePassword == "") {
              $("#changeRepasswordError")
                .css({ display: "block", color: "red" })
                .text("* Please enter the password ");
            } else if (rePassword.length != newpassword.length) {
              $("#changeRepasswordError")
                .css({ display: "block", color: "red" })
                .text("* Password length mismach ");
            } else if (rePassword != newpassword) {
              $("#changeRepasswordError")
                .css({ display: "block", color: "red" })
                .text("* Password mismatch");
            } else {
              $("#changeRepasswordError").css({ display: "none" });
              $("#signupRepassword").val(newpassword);
              $("#userPassword").val(newpassword);

              $("#changePasswordModal").hide();
              $(".modal-backdrop").css("display", "none");
            }
          }
        }
      }

 

      //password icon show and hide
      
      function passwordIconButton(mobileid) {
        let passwordShow = $("#"+mobileid).attr("type");
        if (passwordShow == "password") {
          $("#"+mobileid+"Icon").html(
            ' <img src="./image/eye-slash.svg" alt="" height="auto" width="20px" style="margin-top: 4px;"/>'
          );
          $("#"+mobileid).attr("type", "text");
        } else {
          $("#"+mobileid+"Icon").html(
            ' <img src="./image/eye.svg" alt="" height="auto" width="20px" style="margin-top: 4px;"/>'
          );
          $("#"+mobileid).attr("type", "password");
        }
      }

//addcart_open_modal function

     function add_cart_open_function(){
      $("#addcartModal").modal("show");
     }


      //addCart function 

      var checking_mobile = [];
      var popup_count_addcart_icon = 0;
      var order_no = 0;
      var full_mobile_price=0;

      function addCart_function(name, price) {
     
          var add_count_each_mobile = 1;

        if (check_login) {
          //remove table in past orders
          $(".past_order").find("tr:gt(0)").remove();
          //add_cart view table
          $("#additem_list").css("display","block");
          $("#empty_add_cart_item_Show").css("display","none");
          $("#Checkout_button").css("display","block");
          // add_cat popu
          $("#itemCount").html(++popup_count_addcart_icon).css("display", "block");
          
          var mobile_name = name.replace(/\s/g, "");
          var mobile_price = price;
          //checking mobile already store are not

          if (!checking_mobile.includes(name)) {
            checking_mobile.push(name);
            $("#" + mobile_name).val(add_count_each_mobile);
            order_no++;
            var add_tables =`<tr id="${mobile_name}row">
            <td >${order_no}</td>
            <td >${name}</td>
            <td >Rs.<span >${mobile_price}</span></td>
            <td ><input type="number"id="${mobile_name}" style="width:50px;" min="1" onclick="keyup_function('${mobile_name}',${mobile_price})" value="${add_count_each_mobile}"></td>
            <td id="${mobile_name}total"> ${price} </td>
            <td ><img src="./image/dropdown/trash.svg" alt="" style="cursor:pointer;"onclick="delete_items('${name}')"></td>
            </tr>`;
            $("#additems_add_table").append(add_tables);
          } 

          else {
            add_count_each_mobile = parseInt($("#" + mobile_name).val());
            add_count_each_mobile++;
            $("#" + mobile_name).val(add_count_each_mobile);
            each_mobile_total_price = add_count_each_mobile * mobile_price;
            $("#" + mobile_name +"total").text(each_mobile_total_price);
          }

          //all mobile total amount

          full_mobile_price=0;
          $("#additems_add_table tr").each(function(){
            
                var per_totalamount=$(this).find('td:nth-child(5)').text()*1;
                full_mobile_price+=per_totalamount;
                $(("#total_of_amount_in_mobiles")).text(full_mobile_price);
          });
        }
         // login alart in addcarterror popup modal

        else{
          $("#alartLoginModal").modal("show");
        }
      }

// add cart table plus minus function

      function keyup_function(mobilename, mobileprice) {
    
        var count= $("#"+mobilename).val()*1;
        var change_totalamout=count*mobileprice;
        $("#" + mobilename +"total").text(change_totalamout);


        var popup_count= 0;
         full_mobile_price=0;
        $("#additems_add_table tr").each(function(){
        
          var each_count_value=Number($(this).find('td:nth-child(4) input[type=number]').val());
          if(Number.isInteger(each_count_value)){
           
            popup_count =popup_count+each_count_value;
            
          }
          $("#itemCount").html(popup_count);

          var per_totalamount=$(this).find('td:nth-child(5)').text()*1;
          full_mobile_price+=per_totalamount;
          $(("#total_of_amount_in_mobiles")).text(full_mobile_price);
      });
     
      popup_count_addcart_icon=popup_count;
    }

  
    //discount button

    var discount_amount = 0;
      function discount_button() {
        var value = $("#total_of_amount_in_mobiles").text();
        if ($("#discount").is(":checked")) {
          var totalvalue = parseInt(value);
          discount_amount = (totalvalue * 20) / 100;
          var percentvalue = totalvalue - discount_amount;
          $("#discountprice").text(discount_amount);
          $("#total_of_amount_in_mobiles").text(percentvalue);
        } else {
          $("#total_of_amount_in_mobiles").text(full_mobile_price);
        }
      }


      // order summery function

           var total_name_detail=[];
           var price=[];
           var total=[];
           function checkout_button() {
           $("#checkoutModal").modal("show");
           $("#addcartModal").modal("hide");

           $("#additems_add_table tr").each(function(){
           var mob_name=  $(this).find('td:nth-Child(2').text();
           if(mob_name!=""){
           total_name_detail.push(mob_name);
           var mob_price=$(this).find('td:nth-Child(5)').text();
           price.push(mob_price);
          }
           var mob_count=$(this).find('td:nth-Child(4) input[type=number]').val();
           if(mob_count!=undefined){
           total.push(mob_count);}
          });

       var add_check_list=0;

          for(let n=0;n< total_name_detail.length;n++)
          {
            add_check_list=`<tr><td>`+total_name_detail[n]+`</td><td>`+total[n]+`</td><td>`+price[n]+`</td></tr>`
            $("#add_item").append(add_check_list);
            $(".past_order").append(add_check_list);
          }
          var checkout_total=0;
        for(let n of price){
        checkout_total+=Number(n);
        }
          $(("#final_amount")).text(checkout_total-discount_amount);
          $("#past_count_total").text(checkout_total-discount_amount);
      
      }
    

//delete items function

function delete_items(mobile_name){
  var count= $("#"+mobile_name.replace(/\s/g,"")).val();
  popup_count= Number($("#itemCount").text());
  popup_count=popup_count-count;
   $("#itemCount").text(popup_count);
      $("#"+mobile_name.replace(/\s/g, "")+"row").remove();
      $("#addcartModal").modal("show");
      for (let i = 0; i < checking_mobile.length; i++) { 
        if (checking_mobile[i] ===mobile_name ) { 
            checking_mobile .splice(i, 1);
          
        }}
           full_mobile_price=0;
           $("#additems_add_table tr").each(function(){          
                var per_totalamount=$(this).find('td:nth-child(5)').text()*1;
                full_mobile_price+=per_totalamount;
                $(("#total_of_amount_in_mobiles")).text(full_mobile_price);});
     }


    //  close button function
     function closebutton_checkout(){
     $("#additems_add_table").find("tr:gt(0)").remove();
     $("#add_item").find("tr:gt(0)").remove();
     popup_count_addcart_icon=0;
     $("#itemCount").html(popup_count_addcart_icon);
     order_no=0;
     total_price=0;
     $(("#total_of_amount_in_mobiles")).text(total_price);
     $(("#final_amount")).text(total_price);
  
  
     $("#empty_add_cart_item_Show").css("display","block");
     $("#additem_list").css("display","none");
     $("#Checkout_button").css("display","none");
 
 
     checking_mobile.splice(0,checking_mobile.length);
     total_name_detail.splice(0,total_name_detail.length);
     price.splice(0,price.length);
     total.splice(0,total.length);
}



