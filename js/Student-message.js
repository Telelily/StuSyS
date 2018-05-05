$(document).ready(function(){
  var Path="http://47.101.33.66:8000/studentsys";
  var flag= "1#2#gjgj";
  $('.modal').modal();
   $('.tooltipped').tooltip();
/*添加字段*/
 $('#AddSure').click(function () {
  $.ajax({
    type:'post',
    url:Path+'/AcademyKeys/addMsg',
    contentType:'application/x-www-form-urlencoded',
    dataType:'json',
    async:true,
    data:{
      "value":$('#addzd').val(),
      "necessary":$('input:radio:checked').val(),
      "flag":flag,
    },
    success:function (data) {
    },
   });
 })
/*添加字段*/
/*获取全部字段*/

$('#showall').click(function(){
   $.ajax({
    type:'post',
    url:Path+'/AcademyKeys/getAllMsg',
    contentType:'application/x-www-form-urlencoded',
    dataType:'json',
    async:false,
    data:{
      "flag":flag,
    },
    success:function(result){
       $('#ztable').html("");
      var str = $('#ztable').html();
      for(var i = 0;i < result.data.length; i++){
        var ids=result.data[i].id;
        str += '<tr>';
        str += '<th>'+'<label>'+'<input type="checkbox" name="che" value='+ids+' />' +'<span class="sp">'+result.data[i].value+'</span>'+'</label>'+'</th>';
        str += '</tr>';
      }
      $('#ztable').html(str);
     
     
     }
  });
})
 
  /*获取全部字段*/
/*删除全部字段*/

$('#deletezd').click(function () { 
       var checkbox = document.getElementsByName("che");  
       var id =""; 
       for ( var i = 0; i < checkbox.length; i++) {  
           if(checkbox[i].checked){  
               id = id + checkbox[i].value/*+","*/;  
           }  
       } 
 $.ajax({
    type:'post',
    url:Path+'/AcademyKeys/deleteMsg',
    contentType:'application/x-www-form-urlencoded',
    dataType:'json',
    async:false,
    data:{
      "flag":flag,
      "id":id,
    },
    
  });
})
/*删除全部字段*/

/*更新字段*/
$('#editzd').click(function(){

   function ShowElement(element) {
            var oldhtml = element.innerHTML;
            var newobj = document.createElement('input');
            newobj.type = 'text';
            newobj.value = oldhtml;
            newobj.id = "textid";
            newobj.onblur = function() {
                element.innerHTML = this.value == oldhtml ? oldhtml : this.value;
            }
            element.innerHTML = '';
            element.appendChild(newobj);
            newobj.select();
            newobj.focus();
        }
     
var checkbox = document.getElementsByName("che");  
var span=$(".sp");
var id=""; 
for ( var i = 0; i < checkbox.length; i++) {  
           if(checkbox[i].checked){ 
           id = id + checkbox[i].value; 
            ShowElement(span[i]);
            console.log($('#textid').elements);
           }  
       } 
 
$('#surezd').click(function () {
$.ajax({
    type:'post',
    url:Path+'/AcademyKeys/updateMsg',
    contentType:'application/x-www-form-urlencoded',
    dataType:'json',
    async:false,
    data:{
      "flag":flag,
      "id":id,
      "value":$('#textid').val() ,
      "necessary":$('input:radio:checked').val(),
    },
    
  });
})
})

/*更新字段*/




});

