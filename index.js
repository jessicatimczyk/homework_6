var items_in_cart = 0;

function test() {
    var carnum = sessionStorage.items_in_cart
    console.log(carnum)
    document.getElementById("cartnum").innerText = items_in_cart;
    if (sessionStorage.items_in_cart == undefined) {
        sessionStorage.items_in_cart = 0;
    }
    document.getElementById("cartnum").innerHTML = sessionStorage.items_in_cart;
    console.log("im in test")
}


function add_to_cart() {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.items_in_cart) {
            sessionStorage.items_in_cart = Number(sessionStorage.items_in_cart) + 1;
        } else {
            sessionStorage.items_in_cart = 1;
        }
        document.getElementById("cartnum").innerHTML = sessionStorage.items_in_cart;
    } else {
        document.getElementById("cartnum").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


console.log("javascript functions triggered")
