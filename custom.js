$(function () {
  var isMobile = $(".mobile-only").is(":visible");
  var elementPosition = $(".slate-form__wrapper").offset();
  var offset = $(".bottom-cta").outerHeight();
  var topofDiv = $(".bottom-cta").offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
      $(".slate-form__wrapper").attr("data-sticky", "true");
    } else {
      $(".slate-form__wrapper").attr("data-sticky", "false");
    }
  });

  $(window).on("load", function (e) {
    moveSlateform();
  });

  $(window).on("resize", function () {
    // If the current active element is a text input, we can assume the soft keyboard is visible.
    if ($(document.activeElement).prop("type") === "text") {
      // Logic for while keyboard is shown
      return;
    } else {
      moveSlateform();
    }
  });

  function moveSlateform() {
    if (isMobile) {
      $(".slate-form__wrapper").detach().appendTo(".mobile-only");
      $(".slate-form__wrapper").attr("data-sticky", "false");
      $(".slate-form__wrapper").css("margin-bottom", "unset");
      $(".slate-form__wrapper").css("all", "initial");
    } else {
      $(".slate-form__wrapper").detach().insertAfter(".cu-masthead__wrapper");
      if ($(window).scrollTop() > topofDiv + offset) {
        $(".slate-form__wrapper").css("margin-bottom", offset);
      }
    }
  }
});
