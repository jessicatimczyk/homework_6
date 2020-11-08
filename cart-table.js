var cart_prod = JSON.parse(sessionStorage.cart_products);

//create the table element
var theTable = document.createElement('table');
theTable.setAttribute("id", "cart_table")

// creates the table contents
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
        // removes product when button pressed
        butn.addEventListener("click", function () {
            remove_prod(this);
        })
        td.appendChild(document.createTextNode(cart_prod[i]));
        td2.appendChild(butn);
        tr.appendChild(td);
        tr.appendChild(td2);
        theTable.appendChild(tr);

    }
    let my_table = document.getElementById("my_table");
    my_table.appendChild(theTable);

}

// removes product that goes with clicked button
function remove_prod(name) {
    cart_prod.splice(name.id, 1)
    name.remove();
    sessionStorage.cart_products = JSON.stringify(cart_prod);
    // updates the table with new array after removal
    location.reload();
    decreaseCartNum();
}

// decreases cart number by 1 when remove pressed
function decreaseCartNum() {
    if (sessionStorage.items_in_cart) {
        sessionStorage.items_in_cart = Number(sessionStorage.items_in_cart) - 1;
    }
}

createCart();
