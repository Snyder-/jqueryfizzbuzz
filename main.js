var divisible = function () {
  var getNumber = parseInt(prompt("Enter a number to show all divisibilities of 3 and 5?")) ;
  if(getNumber > 30000) {
    $("body").append("<h1 class=\"burn\"> Sorry my friend, you have broken the internets!</h1>");
    alert("Your going to crash the server with a number that high!");
  }else {
  for(var i = 1; i <= getNumber; i++)  {
    if( i % 15 === 0) {
      $(".wrapper").append("<p class='fifteen' data-percentage='15'>" +  i +"<br>divisible by both 3 and 5!</p>");
  }else if(i % 5 === 0) {
    $(".wrapper").append("<p class='five' data-percentage='5'>" + i + "<br>divisible by 5 only!</p>");
  }else if(i % 3 === 0) {
    $(".wrapper").append("<p class='three' data-percentage='3'>" +  i + " <br>divisible by 3 only!</p>");
  }else {
    $(".wrapper").append( "<p class='zero' data-percentage='0'>" + i + "</p>" );
  }
 }
}
};


$(document).ready(function() {
  $(".wrapper").prepend(divisible());
  $("p").addClass("long");
  $("#three").click(function () {
     var idname= $(this).attr('id');
     $("."+idname).toggle()
  });
  $("#five").click(function () {
     var idname= $(this).attr('id');
     $("."+idname).toggle()
  });
  $("#fifteen").click(function () {
     var idname= $(this).attr('id');
     $("."+idname).toggle()
  });
  $("#zero").click(function () {
     var idname= $(this).attr('id');
     $("."+idname).toggle()
  });
});
