$(document).ready(function() {
    var Path = "http://47.101.33.66:8000/studentsys";
    var flag = "1#2#gjgj";
    $('.modal').modal();
    $('.tooltipped').tooltip();
    /*显示所有字段*/
    firstshow();
    var zdlength;//字段对象
    function firstshow() {
         $.ajax({
            type: 'post',
            url: Path + '/AcademyKeys/getAllMsg',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: false,
            data: {
                "flag": flag,
            },
            success: function(result) {
                  $("#zdtr th:gt(0)").remove();
                  $('#select').html("");
               zdlength=result.data;
             
                var str1 = '';
                var str2 = '';
                for (var i = 0; i < result.data.length; i++) {
                    var opids = result.data[i].id;
                    str1 += '<th>' + result.data[i].value + '</th>';
                    str2 += '<option value=' + opids + ' name="opt" >' + result.data[i].value + '</option>';
                }
                $('#zdtr').append(str1);
                $('#select').append(str2);
            }
        });
    }

    /*显示所有字段*/



    /*添加字段*/
    $('#AddSure').click(function() {
        $.ajax({
            type: 'post',
            url: Path + '/AcademyKeys/addMsg',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: true,
            data: {
                "value": $('#addzd').val(),
                "necessary": $('input:radio:checked').val(),
                "flag": flag,
            },
            success: function(data) {
                firstshow();
            },
        });
    });
    /*添加字段*/



    
    /*获取全部字段*/

    $('#showall').click(function() {
        $.ajax({
            type: 'post',
            url: Path + '/AcademyKeys/getAllMsg',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: false,
            data: {
                "flag": flag,
            },
            success: function(result) {
                $('#ztable').html("");
                var str = $('#ztable').html();
                for (var i = 0; i < result.data.length; i++) {
                    var ids = result.data[i].id;
                    str += '<tr>';
                    str += '<th>' + '<label>' + '<input type="checkbox" name="che" value=' + ids + ' />' + '<span class="sp">' + result.data[i].value + '</span>' + '</label>' + '</th>';
                    str += '</tr>';
                }
                $('#ztable').html(str);


            }
        });
    });
    /*获取全部字段*/
    /*删除全部字段*/

    $('#deletezd').click(function() {
        var checkbox = document.getElementsByName("che");
        var id = "";
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                id = id + checkbox[i].value /*+","*/ ;
            }
        }
        $.ajax({
            type: 'post',
            url: Path + '/AcademyKeys/deleteMsg',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: false,
            data: {
                "flag": flag,
                "id": id,
            },
             success: function(data) {
                firstshow();
            },

        });
    });
    /*删除全部字段*/

    /*更新字段*/

    $('#editzd').click(function() {

        function ShowElement(element) {
            var oldhtml = element.innerHTML;
            var newobj = document.createElement('input');
            newobj.type = 'text';
            newobj.value = oldhtml;
            newobj.onblur = function() {
                element.innerHTML = this.value == oldhtml ? oldhtml : this.value;
            };
            element.innerHTML = '';
            element.appendChild(newobj);
            newobj.select();
            newobj.focus();
        }

        var checkbox = document.getElementsByName("che");
        var span = $(".sp");
        var id = "";
        var xzd = "";
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                id = id + checkbox[i].value;
                ShowElement(span[i]);
                console.log(span[i].innerHTML);
                xzd = xzd + span[i];
            }
        }

        $('#surezd').click(function() {
            var checkbox = document.getElementsByName("che");
            var span = $(".sp");
            var xzd = "";
            for (var i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked) {
                    console.log(span[i].innerHTML);
                    xzd = xzd + span[i].innerText;
                }
            }
            $.ajax({
                type: 'post',
                url: Path + '/AcademyKeys/updateMsg',
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'json',
                async: false,
                data: {
                    "flag": flag,
                    "id": id,
                    "value": xzd,
                    "necessary": $('input:radio:checked').val(),
                },
                 success: function(data) {
                firstshow();
            },

            });
        });
    });
    /*更新字段*/

    /*添加学生信息*/

$('#addstubtn').click(function () {
 
 $.ajax({
            type: 'post',
            url: Path + '/AcademyKeys/getAllMsg',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: false,
            data: {
                "flag": flag,
            },
            success: function(result) {
                  $("#addstucol").html("");

                var str = '';
                for (var i = 0; i < result.data.length; i++) {
                    var ids = result.data[i].id;
                    str += result.data[i].value + ' <div class="input-field inline">' + ' <input type="text" class="validate" name="xinxi" id=' + ids + ' >' + '</div>' ;

                }
                $('#addstucol').html(str);
            }
        });
});




    $('#addstu').click(function() {
    var key = [];
    var values = [];
    var mes={};
    var xinxi = document.getElementsByName("xinxi");
     for (var i = 0; i < xinxi.length; i++) {
            key.push(xinxi[i].id);
            values.push(xinxi[i].value);
            mes[key[i]]=values[i];
             
        }
      
      
        $.ajax({
            type: 'post',
            url: Path + '/StudentMessage/addMsg',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: true,
            data: {
             "flag": flag,
             "message":mes
            },
            success: function(data) {
            },
            error:function(data){
            }
        });
    });

    /*添加学生信息*/
/*查找学生信息*/
  


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
             "flag": flag,
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
                  for (var j = 0; j < zdlength.length; j++) {
                    var tmp2=tmp[ zdlength[j].id ];//map格式
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
       
/*查找学生信息*/





/*删除学生信息*/
 $('#deletestuMes').click(function () {
    var deleid = [];
    /*var delemes={};*/
var checkboxstu = document.getElementsByName("checkedstu");
        var id = "";
        for (var i = 0; i < checkboxstu.length; i++) {
            if (checkboxstu[i].checked) {
                deleid.push(checkboxstu[i].value);
            }
        }
       /* delemes[idList]=deleid;*/
        console.log(deleid);
     /*   console.log(delemes);*/
    

 

        $.ajax({
            type: 'post',
            url: Path + '/StudentMessage/deleteMsgByKeyList',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: true,
            data: {
             "flag": flag,
            "idList":["5b0930e68c6109549c51473d", "5acb4f9de0087421c89ae53b",
 "5acb4f9de0087421c89ae53c",
 "5acb4f9de0087421c89ae53d",
 "5acb4f9de0087421c89ae53e"]
            },
            success: function(data) {
            },
            error:function(data){
            }
        });
/*删除学生信息*/
});
});