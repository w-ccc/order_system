var comment_list=new Array;
var table=document.getElementById("comment_list");
var comment_info=[{name:"烤鱼",price:68,star:5},
{name:"红烧排骨",price:60,star:4.5},
{name:"红烧鱼",price:88,star:4},
{name:"红烧肉",price:48,star:3.5},
{name:"小葱拌豆腐",price:10,star:5},
{name:"拍黄瓜",price:9,star:4},
{name:"糖拌西红柿",price:21,star:5},
{name:"小鸡炖蘑菇",price:56,star:4},
{name:"米饭",price:2,star:4.5},
{name:"面条",price:20,star:2},
{name:"烧饼",price:5,star:2.5},
{name:"果粒奶优",price:5,star:5},
{name:"果粒橙",price:10,star:5},
{name:"鲜橙多",price:10,star:5}];
var td_name;
var td_price;
var td_star;
var td_link;
var form_link
var input_link;



for(var i=0; i<comment_info.length;i++){
    comment_list[i]=document.createElement("tr");
    td_name=document.createElement("td");
    td_price=document.createElement("td");
    td_star=document.createElement("td");
    td_link=document.createElement("td");
    form_link=document.createElement("form");
    input_link=document.createElement("input");
    td_name.innerText=comment_info[i].name;
    td_price.innerText=comment_info[i].price;
    td_star.innerText=comment_info[i].star;
    td_link.innerHTML="<a href=''>查看</a>";
    form_link.method="post";
    form_link.action="";
    input_link.type="hidden";
    input_link.value=i;
    comment_list[i].appendChild(td_name);
    comment_list[i].appendChild(td_price);
    comment_list[i].appendChild(td_star);
    comment_list[i].appendChild(td_link);
    table.appendChild(comment_list[i]);
}

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
    $("div.toolbar").html("<div class='row'>"+dataPlugin+"</div>");
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
      