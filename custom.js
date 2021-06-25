$(function () {
  var elementPosition = $(".slate-form__wrapper").offset();

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
    isMobile = $(".mobile-only").is(":visible");
    if (isMobile) {
      console.log("mobile view");
      $(".slate-form__wrapper").detach().appendTo(".mobile-only");
      $(".slate-form__wrapper").attr("data-sticky", "false");
    } else {
      $(".slate-form__wrapper").detach().insertAfter(".cu-masthead__wrapper");
      $(".slate-form__wrapper").attr("data-sticky", "true");
    }
  }
});
