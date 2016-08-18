$(document).ready(function () {
  $(".landing-container").hover(
    function() {
      $(".logo-container").css("display", "none");
    }, function() {
      $(".logo-container").css("display", "block");
    }
  );
});
