console.log("i made it to cart.js")
console.log("cart products = ", sessionStorage.cart_products)

function createTable(tableData) {
    console.log("i made it to create table")
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    console.log(tableData);

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        //        rowData.forEach(function (cellData) {
        //            var cell = document.createElement('td');
        //            cell.appendChild(document.createTextNode(cellData));
        //            row.appendChild(cell);
        //        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

//createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
createTable(sessionStorage.cart_products);
