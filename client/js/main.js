var loadedData = [];
$(document).ready(function(){

  $("#user_btn").hide();

  var itemModalTemplate = Handlebars.compile($("#item-modal-template").html());
  $.ajax({
    type : "get",
    url  : "libs/prodData.json"
  }).then(function(data){
    loadedData = loadedData.concat(data.items);
  }).fail(function(error){
    console.log("Error: " + error);
  });

  $('body').on('click', '.trigger_of_pop_up', function(){
    var itemId = $(this).attr('data-item-id');
    for(var i = 0; i < loadedData.length; i++){
      var itemData = loadedData[i];
      if(itemData.idShop == itemId){
        // Found it, populating data
        $("#accordion").html(itemModalTemplate(itemData));
        break;
      }
    }
    $("#item_modal").modal("show");
  });

// -----------------------------



  $(function() {
    $('.trigger').hover(function() {
      $(event.target).parent().find('.pop-up').show();
    }, function() {
      $(event.target).parent().find('.pop-up').hide();
    });
  });

  // document.getElementById('datestamp').innerHTML=Date();
// -----------------------------
  var source = $("#list_shop_template").html();
  var listShopTemplate = Handlebars.compile(source);
  $.ajax({
    type : "get",
    url  : "/api/shop/all",
    contentType : "application/json"
  }).then(function(data){
    var itemHtml = listShopTemplate(data);
    $("#list_shop").html(itemHtml);
    $("#list_shop").masonry({
      itemSelector: '.item_container',
      columnWidth: '.item_container',
      percentPosition: true
    });
    $("#list_shop").imagesLoaded().progress( function() {
      $("#list_shop").masonry('layout');
    });
  }).fail(function(error){
    console.log("Error: " + error);
  });
// ----------------------------
  // $(function () {
  //
  // });
//-----------------------------
  $( function() {
    $( "#tab-list" ).tabs({
      event: "mouseover",
      activate: function(event, ui){
        (ui.oldTab.children()).css(
          "background", "rgb(205,214,218)"
        );
        (ui.newTab.children()).css({
          "background": "rgb(89,109,120)",
          "color": "rgb(255,255,255)"
        });
      }
    });
  } );

  // ---------------------------
  $(window).on("scroll", function(e){

    if($(window).scrollTop() + $('.navbar.navbar-default').height() >= $('#home').height()){
      $('.site_logo img').css({
        "width": "30%"
      });
      $('.navbar.navbar-default').css({
        "background":"rgba(0, 0, 0, 1)"
      });
    }else{
      $('.site_logo img').css({
        "width": "50%"
      });
      $('.navbar.navbar-default').css({
        "background":"rgba(0, 0, 0, 0.3)"
      });

    }
    if($(window).width() <= 769){
      $('.menu-container .site_logo img').css({
        "width": "150px",
        "background": "transparent",
        "text-align": "center",
        "float": "left"
      });
      $('.navbar.navbar-default').css({
        "background":"rgba(0, 0, 0, 1)"
      });
    }
  });

  // ---------------------------

  $('#navbar-collapse li a').on('click', function(event) {
    $(this).parent().parent().find('a').removeClass('active');
    $(this).addClass('active');
  });

  $(window).on('scroll', function() {
    $('.target').each(function() {
      if($(window).scrollTop() >= $(this).offset().top - $(".navbar.navbar-default").height())
      {
        var id = $(this).attr('id');
        $('#navbar-collapse li a').removeClass('active');
        $('#navbar-collapse li a[href="#'+ id +'"]').addClass('active');
      }
    });
  });

  $("#login_btn").click(function(){
    $("#myModal").show();
    $("#login_form").submit(function(e){
      e.preventDefault();
      var login_data = {};
      login_data.username = document.forms["login_form"]["username"].value;
      login_data.password = document.forms["login_form"]["password"].value;
      $.ajax({
        type: "post",
        url: "/api/user/login",
        data: login_data
      }).then(function(data) {
        $("#user_btn>a").html(data.username);
        $("#user_btn").show();
        $("#myModal").modal('hide');
        $("#login_btn").parent().hide();
      })
      return false;
    })
  })

});

// ----------------------------
window.onload = function(){
  $(function() {
    $('.trigger_of_pop_up').hover(function() {

      $(event.target).parent().parent().find('.pop_up_on_shop_list').show();
      if(window.innerWidth < $(document).width()){
        $('.pop_up_on_shop_list').css({
          "transform": "translateX(-100.7%)"
        });
      }
    }, function() {
      $(event.target).parent().parent().find('.pop_up_on_shop_list').hide();

      $('.pop_up_on_shop_list').css({
        "transform": "translateX(100%)"
      });
    });
  });

}
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
