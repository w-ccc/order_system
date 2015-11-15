var bill_list=new Array;
var table=document.getElementById("bill_list");
var bill_info=[{time:"2015-9-10 12:30",money:120,people:3,table:15,},
{time:"2015-9-10 13:10",money:130,people:3,table:12},
{time:"2015-9-15 12:30",money:150,people:4,table:12},
{time:"2015-10-2 12:20",money:180,people:5,table:10},
{time:"2015-12-11 12:41",money:200,people:5,table:9},
{time:"2015-5-31 12:40",money:125,people:3,table:21},
{time:"2015-4-20 12:35",money:780,people:15,table:40},
{time:"2015-6-28 14:30",money:407,people:8,table:20},
{time:"2015-7-5 11:24",money:612,people:10,table:9},
{time:"2015-7-3 11:14",money:62,people:1,table:19},
{time:"2015-7-8 12:24",money:579,people:9,table:20},
{time:"2015-7-10 17:24",money:40,people:1,table:15},
{time:"2015-7-7 13:24",money:100,people:2,table:16},
{time:"2015-2-10 16:50",money:342,people:5,table:27}];
var td_time;
var td_money;
var td_people;
var td_table;
var td_link;
var form_link
var input_link;



for(var i=0; i<bill_info.length;i++){
    bill_list[i]=document.createElement("tr");
    td_time=document.createElement("td");
    td_money=document.createElement("td");
    td_people=document.createElement("td");
    td_table=document.createElement("td");
    td_link=document.createElement("td");
    form_link=document.createElement("form");
    input_link=document.createElement("input");
    td_time.innerText=bill_info[i].time;
    td_money.innerText=bill_info[i].money;
    td_people.innerText=bill_info[i].people;
    td_table.innerText=bill_info[i].table;
    td_link.innerHTML="<a href='bill.html'>查看</a>";
    form_link.method="post";
    form_link.action="";
    input_link.type="hidden";
    input_link.value=i;
    bill_list[i].appendChild(td_time);
    bill_list[i].appendChild(td_money);
    bill_list[i].appendChild(td_people);
    bill_list[i].appendChild(td_table);
    bill_list[i].appendChild(td_link);
    table.appendChild(bill_list[i]);
}

function filterColumn ( i ) {
    $('#myDataTable').DataTable().column( i ).search(
        $('#col'+i+'_filter').val()
    ).draw();
}

var time_search="<label class='control-label col-lg-1' for='reportrange'>搜索时间段</label><div class='col-lg-2'><div class='input-group'><span class='input-group-addon'><i class='fa fa-calendar'></i></span><input type='text' class='form-control' id='reportrange'></div></div>"
var col1_fil="<div class='col-lg-2'></div><label class='control-label col-lg-1' for='reportrange'>搜索金额</label><input type='text' class='column_filter form-control' id='col1_filter' data-column=1>";
var col2_fil="<br/><label class='control-label col-lg-1' for='reportrange'>搜索人数</label><div class='col-lg-2'><input type='text' class='column_filter form-control' style='width:210px;' id='col2_filter' data-column=2></div>";
var col3_fil="<div class='col-lg-2'></div><label class='control-label col-lg-1' for='reportrange'>搜索桌台号</label><input type='text' class='column_filter form-control' id='col3_filter' data-column=3>";
var dataPlugin =
        "<label class='control-label col-lg-1' for='reportrange'>搜索时间段</label><div class='col-lg-2' style='position: relative;'>"+
        '<input id="config-demo" class="form-control" type="text" style="width:210px;"/> '+
        '<i class="glyphicon glyphicon-calendar fa fa-calendar" style=" bottom: 0px; right: 25px; top: auto; cursor: pointer;"></i> '+
        '</div> ';
$(document).ready(function() {
    $('#myDataTable').dataTable( {
        "dom": '<"toolbar">',
        //"pagingType": "full_numbers"
    } );
    $("div.toolbar").html("<div class='row'>"+dataPlugin+col1_fil+
                    "</div><div class='row'>"+col2_fil+col3_fil+"</div>");
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn($(this).attr('data-column'));
    } );
} );

$(document).ready(function() {


        updateConfig();

        function updateConfig() {
          var options = {};

            options.autoApply = true;
            options.ranges = {
              '今天': [moment(), moment()],
              '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
              '过去7天': [moment().subtract(6, 'days'), moment()],
              '过去30天': [moment().subtract(29, 'days'), moment()],
              '本月': [moment().startOf('month'), moment().endOf('month')],
            };
            options.locale = {
              format: 'YYYY/MM/DD',
              separator: ' - ',
              applyLabel: '确定',
              cancelLabel: '取消',
              fromLabel: '从',
              toLabel: '至',
              customRangeLabel: '自定义时间',
              daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
              monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
              firstDay: 1
            };
        options.linkedCalendars = true;
        options.autoUpdateInput = true;
        options.startDate = moment();
        options.endDate = moment();

          $('#config-demo').daterangepicker(options, function(start, end, label) { 
          console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); 
          //此处可提交表单！！！
          //alert(start.format('YYYY-MM-DD'));
          
          
          });
            
        }

      });
      