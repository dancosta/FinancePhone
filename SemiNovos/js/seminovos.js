
/**
 * automatic generate the phone tables
 * gettind data from jason file
 * 
 * exemple of table row created 
 *
 *  <tr class="phoneDesc">
      <td>iPhone 6s 32 Gb
        <p class="price text-right hidden">R$ 700,00 - R$ 900,00</p>
      </td>
    </tr>

 */

$.getJSON('data/phones.json', function (data) {
  //console.log(data);
  var output = '';
  $.each(data, function (key, val) {
    output += '<tr class="phoneDesc">\n';
    output +=   '<td>' +val.device;
    output +=     '<p class="price text-right hidden"> ' + val.price + '</p>';
    output +=   '</td>';
    output +='</tr>\n';
    //console.log(output);
  });
  //console.log(output);
  $('#updateTable').html(output);
  // wait for the table to be ready for registering 
  // click handler 
}).done(addClickHandler);

function addClickHandler (){
  $(".phoneDesc").on("click", function () {
    //console.log(this);
    let clicked = $(this).find("p");
    $(clicked).slideToggle().toggleClass("active");
    $("#deviceTable").find(".active").not(clicked).removeClass("active").slideUp();
  });

} 