console.log("i made it to cart.js");
console.log("cart products = ", sessionStorage.cart_products);


// Get array of classes without jQuery
var cart_prod = JSON.parse(sessionStorage.cart_products);

//var arrayLength = array.length;
var theTable = document.createElement('table');

// Note, don't forget the var keyword!
for (var i = 0, tr, td; i < cart_prod.length; i++) {
    tr = document.createElement('tr');
    td = document.createElement('td');
    td2 = document.createElement('td');
    var butn = document.createElement("button");
    var txt = document.createTextNode("Remove");

    butn.classList.add(i);
    butn.appendChild(txt);

    //    document.appendChild(butn);
    td.appendChild(document.createTextNode(cart_prod[i]));
    td2.appendChild(butn);
    tr.appendChild(td);
    tr.appendChild(td2);
    theTable.appendChild(tr);

    butn.onclick = function () {
        //        alert(butn.id);
        console.log("cart_prod = ", cart_prod);
        delete cart_prod[i];
        console.log("cart_prod after delete = ", cart_prod);
    };
}
let my_table = document.getElementById("my_table");
my_table.appendChild(theTable);

function returnBtn(clickedBtn) {
    console.log(clickedBtn);
}


//function printButn() {
//    for (var i = 0; i < cart_prod.length; i++) {
//        var butn = document.createElement("button");
//        var txt = document.createTextNode("Remove");
//        butn.appendChild(txt);
//        document.appendChild(butn);
//        butn.classList.add("remove_btn");
//    }
//}
