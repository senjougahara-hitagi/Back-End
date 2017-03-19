console.log("admin loaded");

$( document ).ready(function() {
  var source = $("#list_member").html();
  var listMember = Handlebars.compile(source);
  $("#search_form").submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
    console.log("form data  ",data);
    $.ajax({
      type: "get",
      url: "/api/user/find?" + data,
      contentType : "application/json"
    }).then(function(data) {
      console.log(data);
      var obj = {items:[]};
      obj.items = data;
      var itemHtml = listMember(obj);
      $("#table_member").html(itemHtml);
    }).fail(function(err) {
      console.log("Error " + err);
    })
    return false;
  })
})
