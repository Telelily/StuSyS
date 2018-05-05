$(document).ready(function(){
  
  $.ajax({
    type:'post',
    url:'',
    contentType:'application/x-www-form-urlencoded',
    dataType:'json',
    async:false,
    data:{
      
    },
    success:function(data){
      var str = $('#table').html();
      for(var i = 0;i < data.length; i++){
        str += '<td>'+'<label>'+'<input type="checkbox" />'+'<span>'+'</span>'+'</label>'+'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '<td>'+ data[i]. +'</td>';
        str += '</tr>';
      }
      $('#table').html(str);
     }
    error:function(){
      
    }
  });

});

