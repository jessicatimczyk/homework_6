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
    var amountSel = document.getElementById("amount");
    var glazeSel = document.getElementById("glaze");
    for (var x in subjectObject) {
        amountSel.options[amountSel.options.length] = new Option(x);
    }
    amountSel.onchange = function () {
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
        console.log("var z = ", z);
        //        for (var i = 0; i < z.length; i++) {
        //            glazeSel.options[glazeSel.options.length] = new Option(z[i]);
        //        }
        if (z == "Vanilla milk") {
            console.log("vanilla milk true")
            document.getElementById("prdct_details_img").src = "joseph-gonzalez-AQSga3jii8A-unsplash (1).jpg";

        }
        if (z == "Sugar milk") {
            console.log("sugar milk true")
            document.getElementById("prdct_details_img").src = "rob-sarmiento-RbqgLewxyXo-unsplash.jpg";
        }
        if (z == "Double chocolate") {
            console.log("chocolate true")
            document.getElementById("prdct_details_img").src = "tijana-drndarski-YC06tYOZqGo-unsplash copy.jpg";
        }

        if (z == "None") {
            console.log("None")
            document.getElementById("prdct_details_img").src = "kjartan-einarsson-1V-sKpHHju4-unsplash.jpg";
        }

    }
}
