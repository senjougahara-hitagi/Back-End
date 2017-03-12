function checkform(){
  var username =document.getElementById("username").value;
  var password =document.getElementById("password").value;
  var password1 =document.getElementById("password1").value;
  var password_error = document.getElementById("password_error");
  if(username==""){
    document.getElementById("name_error").innerHTML ="Username is required";


  }else {
    document.getElementById("name_error").innerHTML ="";
  }

  if(password==""){
    document.getElementById("password_error").innerHTML ="Password required";



  }else {
    document.getElementById("password_error").innerHTML ="";
  }
  if(password1==""){
    document.getElementById("password_error1").innerHTML ="Password required";



  }else {
    document.getElementById("password_error").innerHTML ="";
  }
  if(password!=password1){
      document.getElementById("password_error").innerHTML ="The two passwords do not match";
  }else {
    document.getElementById("password_error").innerHTML ="";
  }
  if(username!=""&&password!=""&&password==password1){
    window.location="index.html";
  }
}

$(document).ready(function() {
  $("#sign_up_form").submit(function(e) {
    // console.log("sign up");
    e.preventDefault();
    var data = $(this).serialize();
    console.log("form data",data);
    $.ajax({
      type: "POST",
      url: "/api/user/create",
      data: data
    }).done(function(data) {
      console.log("success");
    }).fail(function(err) {
      console.log(err);
    })
    return false;
  })
})
