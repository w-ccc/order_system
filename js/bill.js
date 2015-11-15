var p_time=document.getElementById("time");
var p_people=document.getElementById("people");
var p_table=document.getElementById("table");
var td_n;
var td_name;
var td_price;
var td_nums;
var dish_list=new Array;
var table=document.getElementById("dish_list");
var info={time:"2015-9-10 13:10",money:130,people:3,table:12,dishes:[{name:"烤鱼",price:68,n:1},{name:"米饭",price:2,n:3},{name:"羊肉串",price:30,n:10},{name:"烤翅",price:30,n:5}]}

p_time.innerText="就餐时间："+info.time;
p_people.innerText="就餐人数："+info.people+"人";
p_table.innerText="桌号："+info.table;
var n=info.dishes.length;
for(var i=0;i<n;i++){
    dish_list[i]=document.createElement("tr");
    td_n=document.createElement("td");
    td_name=document.createElement("td");
    td_price=document.createElement("td");
    td_nums=document.createElement("td");
    td_n.innerText=i+1;
    td_name.innerText=info.dishes[i].name;
    td_price.innerText=info.dishes[i].price;
    td_nums.innerText=info.dishes[i].n;
    dish_list[i].appendChild(td_n);
    dish_list[i].appendChild(td_name);
    dish_list[i].appendChild(td_nums);
    dish_list[i].appendChild(td_price);
    table.appendChild(dish_list[i]);
}

dish_list[n]=document.createElement("tr");
td_n=document.createElement("td");
td_name=document.createElement("td");
td_price=document.createElement("td");
td_nums=document.createElement("td");
td_price.innerHTML="<b>总金额：</b>";
td_nums.innerText=info.money+"元";
dish_list[n].appendChild(td_n);
dish_list[n].appendChild(td_name);
dish_list[n].appendChild(td_price);
dish_list[n].appendChild(td_nums);
table.appendChild(dish_list[n]);