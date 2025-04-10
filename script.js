let shoppinglist=[];

var text1=document.getElementById("textbox1");
var text2=document.getElementById("textbox2");
var category=document.getElementById("category");
var h4=document.getElementById("list");
var cat1=document.getElementById("c1");
var cat2=document.getElementById("c2");
var cat3=document.getElementById("c3");


var btn1=document.getElementById("add-button");
var btn2=document.getElementById("remove-button");
var btn3=document.getElementById("sort-button");

function add()
{
    let v1=text1.value;
    let v2=text2.value;
    let car=category.value;
    shoppinglist.push(`${v1}-${v2}`);
    h4.textContent=`Shopping list: ${shoppinglist}`;
    if(category.value=='Diary')
    {
        var listItem=document.createElement("li");
        listItem.textContent=`${text1.value}`;
        cat1.append(listItem);
    }
    if(category.value=='Bakery')
    {
        var listItem=document.createElement("li");
        listItem.textContent=`${text1.value}`;
        cat2.append(listItem);
    }
    if(category.value=='Others')
    {
        var listItem=document.createElement("li");
        listItem.textContent=`${text1.value}`;
        cat3.append(listItem);
    }
}
function remove()
{
    if(shoppinglist.length===0)
    {
        alert("Shopping list is already empty");
        return;
    }
    const lastItem=shoppinglist.pop();
    h4.textContent=`Shopping list: ${shoppinglist}`;
    const [itemname] = lastItem.split("-");
    if(cat1.querySelector(`li:last-child`)?.textContent===itemname)
    {
        cat1.removeChild(cat1.lastChild);
    }
    if(cat2.querySelector(`li:last-child`)?.textContent===itemname)
    {
        cat2.removeChild(cat2.lastChild);
    }
    if(cat3.querySelector(`li:last-child`)?.textContent===itemname)
    {
        cat3.removeChild(cat3.lastChild);
    }
}
function sortItem()
{
    shoppinglist.sort();
    h4.textContent=`Shopping list: ${shoppinglist}`;
}