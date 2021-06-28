$(function () {
  var elementPosition = $(".slate-form__wrapper").offset();

  $(window).scroll(function () {
    offsetFooter();
    if ($(window).scrollTop() > elementPosition.top) {
      $(".slate-form__wrapper").attr("data-sticky", "true");
    } else {
      $(".slate-form__wrapper").attr("data-sticky", "false");
    }
  });

  $(window).on("resize", function (e) {
    offsetFooter();
  });

  // Slate embed loads the form - doesn't exist initially.
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

function offsetFooter() {
  var offset = $(".bottom-cta").outerHeight() + 20;
  var topofDiv = $(".bottom-cta").offset().top;
  if ($(window).scrollTop() > topofDiv + offset) {
    $(".slate-form__wrapper").css("margin-bottom", offset).animate(300, slow);
  }
}
