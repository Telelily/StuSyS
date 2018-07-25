$(document).ready(function(){

 var edit = $('.edit');
  var PE = $('#PE');
  var beizhu = $('.beizhu');
  var xuanze = $('.xuanze');
  var clear = $('.clear');
  var check = $('.check');
  edit.click(function () {
   edit.addClass('hide');
   xuanze.removeClass('hide');
   PE.css({"border" : "groove"});
   PE.attr("disabled",false);
  });

  clear.click(function () {
      xuanze.addClass('hide');
       edit.removeClass('hide');
        PE.css({"border" : "none"});
         PE.attr("disabled",true);

  });
   check.click(function () {
      xuanze.addClass('hide');
       edit.removeClass('hide');
        PE.css({"border" : "none"});
         PE.attr("disabled",true);

  });



});

