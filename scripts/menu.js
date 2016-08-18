$(document).ready(function () {
  $(".menu").click(function() {
    $(".menu").addClass("responsive-menu");
    $(".navbar-item").addClass("navbar-item-responsive");
    $(".navbar").addClass("navbar-responsive");
    $(".landing-container").addClass("landing-container-responsive");
    $(".body-container").hide();
  });
});
