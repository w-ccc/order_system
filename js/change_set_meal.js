var set_meal=[{name:"套餐1",dish:[{name:"烤鱼",price:99,num:1},{name:"米饭",price:2,num:2},{name:"果粒橙",price:5,num:2}],price:109},
              {name:"套餐2",dish:[{name:"烤鱼",price:99,num:1},{name:"米饭",price:2,num:2},{name:"果粒橙",price:5,num:2}],price:109},
              {name:"套餐3",dish:[{name:"烤鱼",price:99,num:1},{name:"米饭",price:2,num:2},{name:"果粒橙",price:5,num:2}],price:109}]
var container = document.getElementById("inner_table");
var row_list=new Array;
var col_lg_6_list=new Array;
var box;
var header;
var icons;
var i_table;
var title;
var toolbar;
var delete_button;
var delete_icon;
var body;
var table;
var thead;
var tbody;
var tr;
var td_name;
var td_price;
var td_num;
var td_link;

for(var i = 0; i < set_meal.length; i++) {
    col_lg_6_list[i] = document.createElement("div");
    col_lg_6_list[i].setAttribute("class","col-lg-6");
    box = document.createElement("div");
    box.setAttribute("class","box");
    col_lg_6_list[i].appendChild(box);
    header = document.createElement("header");
    box.appendChild(header);
    icons = document.createElement("div");
    icons.setAttribute("class","icons");
    i_table = document.createElement("i");
    i_table.setAttribute("class","fa fa-table");
    icons.appendChild(i_table);
    header.appendChild(icons);
    title = document.createElement("h5");
    title.innerHTML = set_meal[i].name;
    header.appendChild(title);
    toolbar = document.createElement("div");
    toolbar.setAttribute("class","toolbar");
    header.appendChild(toolbar);
    delete_button = document.createElement("a");
    delete_button.setAttribute("class","btn btn-danger btn-sm close-box");
    toolbar.appendChild(delete_button);
    delete_icon = document.createElement("i");
    delete_icon.setAttribute("class","fa fa-times");
    delete_button.appendChild(delete_icon);
    body = document.createElement("div");
    body.setAttribute("class","body");
    box.appendChild(body);
    table = document.createElement("table");
    table.setAttribute("class","table table-bordered table-condensed table-hover table-striped");
    body.appendChild(table);
    thead = document.createElement("thead");
    thead.innerHTML = "<tr><th>菜名</th><th>价格</th><th>数量</th><th></th></tr>";
    table.appendChild(thead);
    tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for(var j = 0; j < set_meal[i].dish.length; j++) {
        tr = document.createElement("tr");
        tbody.appendChild(tr);
        td_name = document.createElement("td");
        td_name.innerHTML = set_meal[i].dish[j].name;
        tr.appendChild(td_name);
        td_price = document.createElement("td");
        td_price.innerHTML = set_meal[i].dish[j].price;
        tr.appendChild(td_price);
        td_num = document.createElement("td");
        td_num.innerHTML = set_meal[i].dish[j].num;
        tr.appendChild(td_num);
        td_link = document.createElement("td");
        td_link.innerHTML="<a href=''>修改</a>";
        tr.appendChild(td_link);
    }
    tr = document.createElement("tr");
    tbody.appendChild(tr);
    td_name = document.createElement("td");
    td_name.innerHTML = "<b>总价</b>";
    tr.appendChild(td_name);
    td_price = document.createElement("td");
    td_price.innerHTML = set_meal[i].price;
    tr.appendChild(td_price);
    td_num = document.createElement("td");
    tr.appendChild(td_num);
    td_link = document.createElement("td");
    td_link.innerHTML="<a href=''>修改</a>";
    tr.appendChild(td_link);
}

for(var i = 0; i <= (col_lg_6_list.length / 2); i++) {
    row_list[i] = document.createElement("div");
    row_list[i].setAttribute("class","row");
    container.appendChild(row_list[i]);
    row_list[i].appendChild(col_lg_6_list[2*i]);
    if((2*i+1)<col_lg_6_list.length)
        row_list[i].appendChild(col_lg_6_list[2*i+1]);
}