$(document).ready(function(){

     var Path = "http://47.101.33.66:8000/studentsys";
    


     /*获取全部字段*/
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
        $('select').formSelect();//服务端数据渲染后执行,再一次初始化




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
             
             "message":mes
            },
            success: function(data) {
            	$('#search').click();
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



/*全选学生信息*/

$('#all').click(function(){
 var one = document.getElementsByName("checkedstu");
 	
 if(this.checked){
 	/*console.log("12");*/
   for(var i=0;i<one.length;i++)
     one[i].checked=true;
}
else{
	/*console.log("11");*/
	for (var j = 0; j < one.length; j++) 
		one[j].checked=false;
}
});
/*全选学生信息*/
   



/*删除学生信息*/
 $('#deletestuMes').click(function () {
    var deleid = [];
    var checkboxstu = document.getElementsByName("checkedstu");
        for (var i = 0; i < checkboxstu.length; i++) {
            if (checkboxstu[i].checked) {
                deleid.push(checkboxstu[i].value);
            }
        }
        $.ajax({
            type: 'post',
            url: Path + '/StudentMessage/deleteMsgByKeyList',
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'json',
            async: true,
            traditional:true,
            data: {
            	idList:deleid,
            },
            success: function(data) {
            	$('#search').click();

            },
            error:function(data){
            }
        });
});

/*删除学生信息*/

/*导出学生信息*/

$('#export').click(function(){
	$('#all2').click(function(){
		if(this.checked){
			for(var i=0;i<one.length;i++)
				one[i].checked=true;
		}
		else{
			for (var j = 0; j < one.length; j++) 
				one[j].checked=false;
		}
	});
	var columname = [];
	var one = document.getElementsByName("one");
	var two = $('.two');
	var exids = [];
	var checkboxstu = document.getElementsByName("checkedstu");
	for (var i = 0; i < checkboxstu.length; i++) {
		if (checkboxstu[i].checked) {
			exids.push(checkboxstu[i].value);
		}
	}
	console.log(exids);
	console.log(columname);

	$('#sureexport').click(function(){
   
    for (var j = 0; j < one.length; j++) {
		if (one[j].checked) {
			columname.push(two[j].innerHTML);
		}
	}
		$.ajax({
			type: 'post',
			url: Path + '/export/studentMessage',
			contentType: 'application/x-www-form-urlencoded',
			dataType: 'json',
			async: true,
			traditional:true,
			data:{
				"ids" : exids,
				"column" : columname,
				"columnIndex" :[1,2,3,4,5,6,7,8,9] ,


			},

			success: function(result) {
				var downPath = Path + "/file/download/path/" + result.data;
				console.log(downPath);
				window.location.href = downPath;

			},
			error:function(data){
			}
		});
	});
});
/*导出学生信息*/







 });
