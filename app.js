
var ulist = document.getElementById("list")

function addItem(){
    var item = document.getElementById("input-todo");

    // creating li tag
    var li = document.createElement("li");

    // creating paragraph tag
    var para = document.createElement("p")
    var paraText = document.createTextNode(item.value)
    para.appendChild(paraText);
    para.setAttribute("class","listVal dBlock")
    li.appendChild(para)

    // creating del button
    var btn = document.createElement("button")
    var btnText = document.createTextNode("DELETE")
    btn.appendChild(btnText);
    btn.setAttribute("class", "btnJS dBlock")
    btn.setAttribute("onclick", "delList(this)")
    li.appendChild(btn);

    // creating edit button 
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class","btnJS dBlock");
    editBtn.setAttribute("onclick", "editText(this)");
    li.appendChild(editBtn)
    
    ulist.appendChild(li);
    item.value = "";
}



function delList(e){
    e.parentNode.remove();
}



function editText(ed){
    var valu = ed.parentNode.firstChild.firstChild.nodeValue
    var newVal = prompt("Edit Item", valu)
    ed.parentNode.firstChild.firstChild.nodeValue = newVal;
}



function delAll(){
    ulist.innerHTML = "";
}