$( function() {
  $( ".draggable" ).draggable({
      stack: ".draggable", containment: ".container"
  });

$(".switch").click( function() {
    $(".container").toggleClass("darkmode");
  })

  $(".hover").mouseover( function() {
    $(".kevin").css("display", "block")
  })
  $(".hover").mouseout( function() {
    $(".kevin").css("display", "none")
  })

  $(".clickme").click( function() {
    $(".extra-info").fadeToggle("hide ")
  })

  $(".yellow-circle ").click( function() {
    $(".yellow-circle ").animate({
      width: "300px",
      height: "300px",
      backgroundColor: "#E44924"
    })
  })

});
