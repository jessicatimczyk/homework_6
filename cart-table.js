console.log("i made it to cart.js");
console.log("cart products = ", sessionStorage.cart_products);


// Get array of classes without jQuery
var cart_prod = JSON.parse(sessionStorage.cart_products);
var remove_buttons = new Array();

//var arrayLength = array.length;
var theTable = document.createElement('table');

// Note, don't forget the var keyword!
for (var i = 0, tr, td; i < cart_prod.length; i++) {
    tr = document.createElement('tr');
    td = document.createElement('td');
    td2 = document.createElement('td');
    var butn = document.createElement("button");
    var txt = document.createTextNode("Remove");

    butn.classList.add('remv_butns');
    butn.setAttribute("id", i);
    butn.appendChild(txt);

    //    butn.addEventListener("click", remove_prod());
    butn.addEventListener("click", function () {
        remove_prod(this);
    })

    //    document.appendChild(butn);
    td.appendChild(document.createTextNode(cart_prod[i]));
    td2.appendChild(butn);
    tr.appendChild(td);
    tr.appendChild(td2);
    theTable.appendChild(tr);

    remove_buttons.push(butn);

    //    butn.onclick = remove_prod();

    //    butn.onclick = function () {
    //        //        alert(butn.id);
    //        console.log("cart_prod = ", cart_prod);
    //        //        delete cart_prod[i];
    //        cart_prod.splice(i, 1);
    //        console.log("cart_prod after delete = ", cart_prod);
    //    };
}
let my_table = document.getElementById("my_table");
my_table.appendChild(theTable);


//for (var i = 0; i < remove_buttons.length; i++) {
//    current_butn = document.getElementById(i);
//    current_butn.
//
//}


console.log('button array = ', remove_buttons);

function remove_prod(name) {
    console.log("im in remove product!");
    console.log('butn_num = ', name.id);
    console.log("current card prods = ", cart_prod);
    cart_prod.splice(name.id, 1)
    console.log("cart_prod after splice = ", cart_prod);
    name.remove();

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

//remove_prod();
