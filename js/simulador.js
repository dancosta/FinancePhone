/** 
1x 2.5%
2x 3.5%
3x 4.5%
4x 5.5%
5x 6.5%
6x 8.5%
7x 9.5%
8x 10.5%
9x 11.5%
10x 12.5%
11x 14.5%
12x 15.5%
*/

/** GLOALs */
var currLocal = {
  style: "currency",
  currency: "BRL"
}

$("#calc").click(performCalc);

function performCalc(){
  var taxes = [
    1.025, 
    1.035,
    1.045,
    1.055,
    1.065,
    1.085,
    1.095,
    1.105,
    1.115,
    1.125,
    1.145,
    1.155
  ];

  
  
  //x = n.toLocaleString("en-GB", currLocal);
  
  var price = $("#val_compra").val();
  var inital = $("#val_entrada").val();
  
  
  var finance = price - inital;

  console.log("Compra: " +price);
  console.log("Entrada: " +inital);
  console.log("financiar: " + finance);

  
  
  
  for (var index = 0; index < 6; index++) {
    var tax = taxes[index];
    var numOfParcels = (index+1);
    var finPlusTax = finance * tax;
    var parcel = Number(finPlusTax / numOfParcels).toFixed(2);
    var totalFinal = Number(inital) + finPlusTax;

    changeResultTable(numOfParcels,parcel,totalFinal);
  }
  shwoResultTable();
 


 
}


function changeResultTable(numOfParcels, parcel, totalFinal){
  
  //var moneySimbol = "R$ ";
  var id = "#fin_"+numOfParcels+"x";
  
  //$("#fin_1x  .parcel").text("R$ 10,98");  
  $(id).find(".parcel").text(Number(parcel).toLocaleString("pt-BR",currLocal));
  $(id).find(".total").text(Number(totalFinal).toLocaleString("pt-BR",currLocal));

  console.log(id);
  console.log("parcel: " + parcel);
}

function shwoResultTable() {
  $("#resultTable").fadeIn();
}