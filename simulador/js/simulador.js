

/** input masks */

$(document).ready(function(){
 $("#val_compra").inputmask("currency", {radixPoint:','}); 
 $("#val_entrada").inputmask("currency", {radixPoint:','});
  
  
});

/** helper function
 * to parse a string of a currrency or real number based on the locale
 * https://stackoverflow.com/questions/29255843/is-there-a-way-to-reverse-the-formatting-by-intl-numberformat-in-javascript
 */
function reverseFormatNumber(val,locale){
  var group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '');
  var decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
  var reversedVal = val.replace(new RegExp('\\' + group, 'g'), '');
  reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.');
  return Number.isNaN(reversedVal)?0:reversedVal;
}
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

/** GLOBALs */
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
  
  var price = reverseFormatNumber($("#val_compra").val(),"pt-BR");
  var inital = reverseFormatNumber($("#val_entrada").val(),"pt-BR");
  
  
  var finance = price - inital;

  console.log("Compra: " +price);
  console.log("Entrada: " +inital);
  console.log("financiar: " + finance);

  
  
  
  for (var index = 0; index < taxes.length; index++) {
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
  document.getElementById("resultTable").scrollIntoView({behavior:"smooth"});
}