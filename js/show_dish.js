var dish_list=new Array;
var hotDish=document.getElementById("hotDish_list");
var coldDish=document.getElementById("coldDish_list");
var rice=document.getElementById("rice_list");
var drink=document.getElementById("drink_list");
var dish_info=[{type:"热菜",name:"烤鱼",nums:257,price:68,},
{type:"热菜",name:"红烧排骨",nums:48,price:60},
{type:"热菜",name:"红烧鱼",nums:30,price:88},
{type:"热菜",name:"红烧肉",nums:20,price:48},
{type:"凉菜",name:"小葱拌豆腐",nums:1000,price:10},
{type:"凉菜",name:"拍黄瓜",nums:55,price:9},
{type:"凉菜",name:"糖拌西红柿",nums:37,price:21},
{type:"热菜",name:"小鸡炖蘑菇",nums:19,price:56},
{type:"主食",name:"米饭",nums:180,price:2},
{type:"主食",name:"面条",nums:89,price:20},
{type:"主食",name:"烧饼",nums:54,price:5},
{type:"饮料",name:"果粒奶优",nums:500,price:5},
{type:"饮料",name:"果粒橙",nums:400,price:10},
{type:"饮料",name:"鲜橙多",nums:250,price:10}];
var td_name;
var td_nums;
var td_price;



for(var i=0; i<dish_info.length;i++){
    dish_list[i]=document.createElement("tr");
    td_name=document.createElement("td");
    td_nums=document.createElement("td");
    td_price=document.createElement("td");
    td_name.innerText=dish_info[i].name;
    td_nums.innerText=dish_info[i].nums;
    td_price.innerText=dish_info[i].price;
    dish_list[i].appendChild(td_name);
    dish_list[i].appendChild(td_nums);
    dish_list[i].appendChild(td_price);
    if(dish_info[i].type=="热菜")
        hotDish.appendChild(dish_list[i]);
    else if(dish_info[i].type=="凉菜")
        coldDish.appendChild(dish_list[i]);
    else if(dish_info[i].type=="主食")
        rice.appendChild(dish_list[i]);
    else
        drink.appendChild(dish_list[i]);
}


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