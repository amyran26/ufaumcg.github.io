$(document).ready(function () {
  $(".menu").click(function() {
    if ($(".menu")[0].innerHTML.indexOf("MENU") > -1) {
      $(".menu").addClass("responsive-menu");
      $(".navbar-item").addClass("navbar-item-responsive");
      $(".navbar").addClass("navbar-responsive");
      $(".landing-container").addClass("landing-container-responsive");
      // Hide whatever the container is on the page
      $(".body-container").hide();
      $(".landing-container").hide();
      $(".menu")[0].innerHTML = "CLOSE";
    } else {
      $(".menu").removeClass("responsive-menu");
      $(".navbar-item").removeClass("navbar-item-responsive");
      $(".navbar").removeClass("navbar-responsive");
      $(".landing-container").removeClass("landing-container-responsive");
      // Show whatever the container is on the page
      $(".body-container").show();
      $(".landing-container").show();
      $(".menu")[0].innerHTML = "MENU";
    }
  });
});
