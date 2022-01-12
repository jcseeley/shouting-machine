$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const whatToYell = $("input#box").val().toUpperCase().concat("!!!");

    $(".box").text(whatToYell);
  });
});