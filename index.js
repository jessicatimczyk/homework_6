var items_in_cart = 0;
var cart_products = sessionStorage.getItem("cart_products") || [];


// shows the current number of items in cart
function test() {
    var carnum = sessionStorage.items_in_cart

    document.getElementById("cartnum").innerText = items_in_cart;

    if (sessionStorage.items_in_cart == undefined) {
        sessionStorage.items_in_cart = 0;
        sessionStorage.cart_products = new Array();
    }
    document.getElementById("cartnum").innerHTML = sessionStorage.items_in_cart;
}

// updates the number of items in cart when button pressed and stores in session storage
function add_to_cart() {

    var product_title = document.getElementById("product_det_title").innerHTML;

    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.items_in_cart) {
            sessionStorage.items_in_cart = Number(sessionStorage.items_in_cart) + 1;

            if (typeof cart_products == "string") {
                cart_products = JSON.parse(cart_products);
            };

            // stores array of products in cart in storage
            cart_products.push(product_title);
            sessionStorage.setItem('cart_products', JSON.stringify(cart_products));

        } else {
            sessionStorage.items_in_cart = 1;
            sessionStorage.cart_products = new Array(product_title);
            console.log("first product = ", sessionStorage.cart_products);
        }
        document.getElementById("cartnum").innerHTML = sessionStorage.items_in_cart;
    } else {
        document.getElementById("cartnum").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
