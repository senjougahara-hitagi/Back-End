console.log("admin loaded");

$( document ).ready(function() {
  var search_data;
  var source = $("#list_member").html();
  var listMember = Handlebars.compile(source);
  $("#search_form").submit(function(e) {
    e.preventDefault();
    search_data = $(this).serialize();
    // console.log("form data  ",search_data);
    $.ajax({
      type: "get",
      url: "/api/user/find",
      contentType : "application/json",
      data : search_data
    }).then(function(data) {
      // console.log("Res: ",data);
      var obj = {items:[]};
      obj.items = data;
      var itemHtml = listMember(obj);
      $("#table_member").html(itemHtml);
    }).fail(function(err) {
      console.log("Error " + err);
    })
    return false;
  })

  $('body').on('click', '.btn.delete_btn', function(){
    var username = $(this).attr('data-member');
    $.ajax({
      type: "delete",
      url: "/api/user/delete/" + username,
      contentType : "application/json"
    }).then(function(data) {
      $("#item_" + username).remove();
    }).fail(function(err) {
      console.log("Error " + err);
    })
  });


  $('body').on('click', '.edit_btn', function(){
    var username = $(this).attr('data-member');
    var sourceEdit = $("#edit-member-modal-template").html();
    var editMember = Handlebars.compile(sourceEdit);
    $.ajax({
      type: "get",
      url: "/api/user/username/" + username,
      contentType : "application/json"
    }).then(function(data) {
      $("#accordion").html(editMember(data[0]));
      $("#edit_" + username).submit(function(e){
        e.preventDefault();
        var edit_data = {};
        edit_data.username = document.forms["edit_form"]["username"].value;

        edit_data.name = document.forms["edit_form"]["name"].value;
        if(edit_data.name == "") edit_data.name = $("#old_name").val();

        edit_data.role = document.forms["edit_form"]["role"].value;
        if(edit_data.role == "") edit_data.role = $("#old_role").val();

        $.ajax({
          type: "put",
          url: "/api/user/edit",
          data: edit_data
        }).then(function(data) {
          console.log("succeed");
        }).fail(function(err) {
          console.log("Error " + err);
        })
        return false;
      });
    }).fail(function(err) {
      console.log("Error " + err);
    })
    $("#edit-member-modal").modal("show");
  });
})
