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
  var checkExist = setInterval(function () {
    if ($(".slate-form__wrapper form").length) {
      $(".slate-form__wrapper")
        .clone()
        .removeClass("desktop-only")
        .addClass("mobile-only")
        .appendTo(".mobile-only");
      clearInterval(checkExist);
    }
  }, 100); // check every 100ms
});
