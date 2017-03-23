$(document).ready(function() {
    $('#sign_up_form').submit(function(e) {


        var username = $.trim($('#username').val());
        var password = $.trim($('#password').val());
        var password1 = $.trim($('#password1').val());

        var flag = true;
        if (password != password1) {
            document.getElementById("password_error").innerHTML = "The two passwords do not match";
            return false;
        } else {

            e.preventDefault();
            var data = $(this).serialize();
            console.log("form data", data);
            $.ajax({
                type: "POST",
                url: "/api/user/create",
                data: data
            }).done(function(data) {
                console.log("success");
                window.location = "index.html";
            }).fail(function(err) {

            })
            return false;
        }


    });
});
