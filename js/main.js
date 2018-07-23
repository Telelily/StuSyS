$(document).ready(function () {
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
});