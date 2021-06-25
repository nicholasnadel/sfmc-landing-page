$(function () {
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

  $(window).on("load resize", function (e) {
    moveSlateform();
  });

  function moveSlateform() {
    var isMobile = $(".mobile-only").is(":visible");
    if (isMobile) {
      $(".slate-form__wrapper").detach().appendTo(".mobile-only");
      $(".slate-form__wrapper").attr("data-sticky", "false");
      $(".slate-form__wrapper").css("margin-bottom", "unset");
    } else {
      $(".slate-form__wrapper").detach().insertAfter(".cu-masthead__wrapper");
      $(".slate-form__wrapper").attr("data-sticky", "true");
      if ($(window).scrollTop() > topofDiv + offset) {
        $(".slate-form__wrapper").css("margin-bottom", offset);
      }
    }
  }
});
