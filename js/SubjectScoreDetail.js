$(document).ready(function(){

 var edit = $('.edit');
  var beizhu = $('.beizhu');
  var xuanze = $('.xuanze');
  var clear = $('.clear');
  var check = $('.check');
  edit.click(function () {
   beizhu.removeClass('hide');
   edit.addClass('hide');
   xuanze.removeClass('hide');
  });

  clear.click(function () {
     beizhu.addClass('hide');
      xuanze.addClass('hide');
       edit.removeClass('hide');

  })
   check.click(function () {
     beizhu.addClass('hide');
      xuanze.addClass('hide');
       edit.removeClass('hide');

  })



})