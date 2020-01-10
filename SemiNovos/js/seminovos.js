



$(".phoneDesc").on("click", function(){
  console.log(this);
  let clicked = $(this).find("p");
  $(clicked).slideToggle().toggleClass("active");
  $("#deviceTable").find(".active").not(clicked).removeClass("active").slideUp();
})