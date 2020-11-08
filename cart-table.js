console.log("i made it to cart.js");
console.log("cart products = ", sessionStorage.cart_products);


// Get array of classes without jQuery
var cart_prod = JSON.parse(sessionStorage.cart_products);

//var arrayLength = array.length;
var theTable = document.createElement('table');
theTable.setAttribute("id", "cart_table")

// Note, don't forget the var keyword!
function createCart() {

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

    }
    let my_table = document.getElementById("my_table");
    my_table.appendChild(theTable);

}



function remove_prod(name) {
    console.log("im in remove product!");
    console.log('butn_num = ', name.id);
    console.log("current card prods = ", cart_prod);
    cart_prod.splice(name.id, 1)
    console.log("cart_prod after splice = ", cart_prod);
    name.remove();

    sessionStorage.cart_products = JSON.stringify(cart_prod);
    console.log('session storage = ', sessionStorage.cart_products);
    location.reload();

    decreaseCartNum();

}

function decreaseCartNum() {
    if (sessionStorage.items_in_cart) {
        sessionStorage.items_in_cart = Number(sessionStorage.items_in_cart) - 1;
    }
}

createCart();
