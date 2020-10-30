var subjectObject = {
    "1": {
        "Vanilla milk": ["Vanilla milk"],
        "Sugar milk": ["Sugar milk"],
        "Double chocolate": ["Double chocolate"],
        "None": ["None"]
    },
    "3": {
        "Vanilla milk": ["Vanilla milk"],
        "Sugar milk": ["Sugar milk"],
        "Double chocolate": ["Double chocolate"],
        "None": ["None"]
    },
    "6": {
        "Vanilla milk": ["Vanilla milk"],
        "Sugar milk": ["Sugar milk"],
        "Double chocolate": ["Double chocolate"],
        "None": ["None"]
    },
    "12": {
        "Vanilla milk": ["Vanilla milk"],
        "Sugar milk": ["Sugar milk"],
        "Double chocolate": ["Double chocolate"],
        "None": ["None"]
    }
};
window.onload = function () {
    test()
    var amountSel = document.getElementById("amount");
    var glazeSel = document.getElementById("glaze");
    for (var x in subjectObject) {
        amountSel.options[amountSel.options.length] = new Option(x);
    }
    amountSel.onchange = function () {
        if (amountSel.value == 1) {
            document.getElementById("product_det_title").innerText = "One Original Cinnamon Bun"
        }
        if (amountSel.value == 3) {
            document.getElementById("product_det_title").innerText = "Three Original Cinnamon Buns"
        }
        if (amountSel.value == 6) {
            document.getElementById("product_det_title").innerText = "Six Original Cinnamon Buns"
        }
        if (amountSel.value == 12) {
            document.getElementById("product_det_title").innerText = "Twelve Original Cinnamon Buns"
        }
        //creates glaze drop down for the 4 glazes
        for (var y in subjectObject[this.value]) {
            // prevents from creating duplicate glazes when user switches amount
            if (glazeSel.options.length <= 4) {
                glazeSel.options[glazeSel.options.length] = new Option(y);
            }
        }
    }
    glazeSel.onchange = function () {
        //display correct values
        var z = subjectObject[amountSel.value][this.value];
        var productTitle = document.getElementById("product_det_title").innerHTML;

        if (z == "Vanilla milk") {
            document.getElementById("prdct_details_img").src = "joseph-gonzalez-AQSga3jii8A-unsplash (1).jpg";
            if (productTitle.includes("with")) {
                var spltstr = productTitle.split("with")

                document.getElementById("product_det_title").innerText = spltstr[0] + " with Vanilla Milk";
            } else {
                document.getElementById("product_det_title").innerText += " with Vanilla Milk";
            }
        }
        if (z == "Sugar milk") {
            document.getElementById("prdct_details_img").src = "rob-sarmiento-RbqgLewxyXo-unsplash.jpg";
            if (productTitle.includes("with")) {
                var spltstr = productTitle.split("with")

                document.getElementById("product_det_title").innerText = spltstr[0] + " with Sugar Milk";
            } else {
                document.getElementById("product_det_title").innerText += " with Sugar Milk";
            }
        }
        if (z == "Double chocolate") {
            document.getElementById("prdct_details_img").src = "tijana-drndarski-YC06tYOZqGo-unsplash copy.jpg";
            if (productTitle.includes("with")) {
                var spltstr = productTitle.split("with")

                document.getElementById("product_det_title").innerText = spltstr[0] + " with Double Chocolate";
            } else {
                document.getElementById("product_det_title").innerText += " with Double Chocolate";
            }
        }

        if (z == "None") {
            document.getElementById("prdct_details_img").src = "kjartan-einarsson-1V-sKpHHju4-unsplash.jpg";
            if (productTitle.includes("with")) {
                var spltstr = productTitle.split("with")

                document.getElementById("product_det_title").innerText = spltstr[0] + " with No Glaze";
            } else {
                document.getElementById("product_det_title").innerText += " with No Glaze";
            }
        }

    }
}
