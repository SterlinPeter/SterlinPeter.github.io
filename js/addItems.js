var itemCount=0;
var totalamt = 0;

function addItem(itemName, itemCost){
    var table = document.getElementById("orders");
    var rowCount = table.rows.length;
    itemCount+=1;
    totalamt+=itemCost;

    var row = table.insertRow(rowCount);
    var Cell1 = row.insertCell(0);
    var Cell2 = row.insertCell(1);
    var Cell3 = row.insertCell(2);
    var Cell4 = row.insertCell(3);

    Cell1.innerHTML = itemCount;
    Cell2.innerHTML = itemName;
    Cell3.innerHTML = 1;
    Cell4.innerHTML = itemCost;

    document.getElementById("finalamt").rows[0].cells[2].innerHTML= itemCount;
    document.getElementById("finalamt").rows[0].cells[3].innerHTML= totalamt;
    return;
}

function clearTable(){
    itemCount = 0;
    totalamt = 0;

    var table = document.getElementById("orders");
    table.innerHTML = "";
    
    document.getElementById("finalamt").rows[0].cells[2].innerHTML= itemCount;
    document.getElementById("finalamt").rows[0].cells[3].innerHTML= totalamt;
}