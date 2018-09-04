$(document).ready(function(){

     var Path = "http://47.101.33.66:8000/studentsys";
     var flag = "1#2#gjgj";


     /*获取全部字段*/
     firstshow();
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
                var str = '';
                for (var i = 0; i < result.data.length; i++) {
                    var ids = result.data[i].id;
                    str += '<th>' + result.data[i].value +'</th>';
                }
                $('#zdtr').append(str);
            }
        });
    }


     /*获取全部字段*/

       /*添加学生信息*/

$('#AddStu').click(function () {
 
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
                /*  $("#addstuspace").html("");*/

                var str = '';
                for (var i = 0; i < result.data.length; i++) {
                    var ids = result.data[i].id;
                    str += ' <div class="" style="text-align: center;">'+ ' <div class="input-field col s4">' + ' <input type="text" class="validate" name="xinxi" id=' + ids + ' >' +' <label for="">'+result.data[i].value + '</label>'+'</div>'+'</div>' ;

                }
                $('#addstuspace').html(str);
            }
        });
});




    $('#Sureaddstu').click(function() {
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



    /*显示学生信息*/
   
    $('#search').click(function () {
    	
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
    });




    /*显示学生信息*/




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
