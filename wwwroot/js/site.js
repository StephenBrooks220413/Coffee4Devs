// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function info() {
    document.getElementById("info").innerHTML = "Chicago, New York, Dallas, San Antonio, New Orleans, Atlanta";
}

function reset() {
    document.getElementById("info").innerHTML = "Locations Shown Here";
}

//Menu javascript for menu.cshtml page
var cartItems = [];
var isTotalHidden = true;

var espresso = {
    name: "Espresso",
    price: 4
}

var latte = {
    name: "Latte",
    price: 3
}

function addToCart(item) {
    cartItems.push(item);
    document.getElementById(
        "itemCounter").innerHTML =
        cartItems.length;
    showTotal();
}

function clickCart() {
    isTotalHidden = !isTotalHidden;
    showTotal();
}

function showTotal() {
    var orderTotal = document
        .getElementById("orderTotal");
    orderTotal.innerHTML = "";

    if (isTotalHidden === false) {
        var total = 0;
        for (var i = 0; i < cartItems
            .length; i++) {
            total += cartItems[i].price;
        }
        orderTotal.innerHTML +=
            "Total: $" + total;
    }
}