console.log("admin loaded");

$( document ).ready(function() {
  $('#searchForm').submit(function(e) {
    e.preventDefault();
    var submitdata = $("#searchForm").serialize();
    {
      name: value
      role: value
      username: value
    }
    console.log("event", submitdata);
    $.ajax({
      url: '../api/user/find',
      data: submitdata,
      method: ''
    }).done(function(data){
      console.log("data",data);
    }).fail(function(err){
      console.log("err",err);
    })
  })
})
