$(document).ready(function () {
var Path = "http://47.101.33.66:8000/studentsys";
$('#modal1').modal('open');
var gotochpw = $('#gotochpw');
var newpwsure = $('#newpwsure');
var content1 = $('.content1');
var content2 = $('.content2');
var content3 = $('.content3');

/*点击立即去修改密码*/
gotochpw.click(function() {
console.log('gotochpw');
  content3.addClass('hide');
  content1.addClass('hide');
  content2.removeClass('hide');

});
/*点击确认修改密码*/
newpwsure.click(function() {
console.log('newpwsure');
  content2.addClass('hide');
  content3.removeClass('hide');

});

    $("#logout").click(function(){
     
   $.ajax({
            type: 'post',
            url: Path + '/account/logout',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: true,
            data: {
               
            },
            success: function(data) {
                
            },
        });
  });







});