$(document).ready(function(){

 var Path = "http://47.101.33.66:8000/studentsys";

 /*操行分查询*/



 /*操行分查询*/



 /*添加一条操行分*/
    /*选择一个学生*/
    $('#search').click(function () {
        var opkey = $('#select option:selected').val();
        var opvalue = $('#icon_prefix').val();
        var opmes={};
        opmes[opkey]=opvalue;

     $.ajax({
            type: 'post',
            url: Path + '/StudentMessage/getMsg',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: true,
            data: {
            
             "conditions":opmes,
             "direction":false
            },
            success: function(result) {
                 $("#tbody").html("");
                var str = '';
                for (var i = 0; i < result.data.length; i++) {
                     var ids = result.data[i]._id;
                    var tmp=result.data[i];//先把这一整行data存起来
                     str += '<tr>' + '<td>' + '<label>' +'<input type="checkbox" name="checkedstu" value=' + ids + '>' + '<span> ' + '</span>' + '</label>' + '</td>';
                  for (var j = 0; j < 2; j++) {
                    var tmp2=tmp[j+1];//map格式
                    if (tmp2==null){
                          str += '<td>-</td>';
                      }else{
                         str += '<td>' +tmp2  + '</td>';
                      }
                }
                 str += '</tr>';
                }
                 $('#tbody').html(str);
            },
            error:function(data){
            }
        });
});



    /*选择一个学生*/

 
 /*添加一条操行分*/































});