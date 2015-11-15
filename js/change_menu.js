var menu_list=new Array;
var table=document.getElementById("menu_list");
var dish_info=[{type:"热菜",name:"烤鱼",nums:257,price:68,star:5},
{type:"热菜",name:"红烧排骨",nums:48,price:60,star:4.5},
{type:"热菜",name:"红烧鱼",nums:30,price:88,star:4},
{type:"热菜",name:"红烧肉",nums:20,price:48,star:3.5},
{type:"凉菜",name:"小葱拌豆腐",nums:1000,price:10,star:5},
{type:"凉菜",name:"拍黄瓜",nums:55,price:9,star:4},
{type:"凉菜",name:"糖拌西红柿",nums:37,price:21,star:5},
{type:"热菜",name:"小鸡炖蘑菇",nums:19,price:56,star:4},
{type:"主食",name:"米饭",nums:180,price:2,star:4.5},
{type:"主食",name:"面条",nums:89,price:20,star:2},
{type:"主食",name:"烧饼",nums:54,price:5,star:2.5},
{type:"饮料",name:"果粒奶优",nums:500,price:5,star:5},
{type:"饮料",name:"果粒橙",nums:400,price:10,star:5},
{type:"饮料",name:"鲜橙多",nums:250,price:10,star:5}];
var td_type;
var td_name;
var td_nums;
var td_price;
var td_star;
var td_link;



for(var i=0; i<dish_info.length;i++){
    menu_list[i]=document.createElement("tr");
    td_type=document.createElement("td");
    td_name=document.createElement("td");
    td_nums=document.createElement("td");
    td_price=document.createElement("td");
    td_star=document.createElement("td");
    td_link=document.createElement("td");
    form_link=document.createElement("form");
    input_link=document.createElement("input");
    td_type.innerText=dish_info[i].type;
    td_name.innerText=dish_info[i].name;
    td_nums.innerText=dish_info[i].nums;
    td_price.innerText=dish_info[i].price;
    td_star.innerText=dish_info[i].star;
    td_link.innerHTML="<a href=''>修改</a>";
    form_link.method="post";
    form_link.action="";
    input_link.type="hidden";
    input_link.value=i;
    menu_list[i].appendChild(td_type);
    menu_list[i].appendChild(td_name);
    menu_list[i].appendChild(td_nums);
    menu_list[i].appendChild(td_price);
    menu_list[i].appendChild(td_star);
    menu_list[i].appendChild(td_link);
    table.appendChild(menu_list[i]);
}


$(document).ready(function() {
    $('#menu_table').dataTable( {
        "pagingType": "full_numbers"
    } );
} );