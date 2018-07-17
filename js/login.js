$(document).ready(function(){

      var editpw =  $('#changepw');
      var content1 = $('.content1');
      var content2 = $('.content2');
      var content3 = $('.content3');
      var content4 = $('.content4');
      var Resetsure = $('#Resetsure');
      var Esure = $('#Esure');
      var test = $('#test');

      /*点击忘记密码*/
      test.click(function () {
        console.log('test');
        content4.addClass('hide');
        content3.addClass('hide');
        content2.addClass('hide');
        content1.removeClass('hide');
     });

       /*点击通过邮箱*/
       editpw.click(function () {
        console.log('editpw');
        content4.addClass('hide');
        content3.addClass('hide');
        content1.addClass('hide');
        content2.removeClass('hide');
     });
       
       /*点击邮箱确定*/
       Esure.click(function () {
        console.log('Esure');
        content2.addClass('hide');
        content3.removeClass('hide');
       });



       /*点击重置确定*/
       Resetsure.click(function () {
        console.log('Resetsure');
        content3.addClass('hide');
        content4.removeClass('hide');

       });

       

    $("#loginbtn").click(function(){
     window.location.href =  "./main.html";
     window.event.returnValue=false;
  });




});