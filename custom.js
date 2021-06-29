$(function () {
  var elementPosition = $(".slate-form__wrapper").offset();
  $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
      $(".slate-form__wrapper").attr("data-sticky", "true");
    } else {
      $(".slate-form__wrapper").attr("data-sticky", "false");
    }
    sticky_relocate();
  });

  $(window).on("resize", function (e) {});
  // Slate embed loads the form - doesn't exist initially.
  var checkExist = setInterval(function () {
    // we only want the form to be cloned & appended to for mobile once
    if (
      $(".slate-form__wrapper form").length &&
      $(".mobile-only .slate-form__wrapper").length <= 0
    ) {
      $(".slate-form__wrapper")
        .clone()
        .removeClass("desktop-only")
        .addClass("mobile-only")
        .appendTo(".mobile-only");
      clearInterval(checkExist);
    }
  }, 100); // check every 100ms
});

function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var footer_top = $(".bottom-cta").offset().top;
  var slate_form_wrapper = $(
    ".slate-form__wrapper[data-sticky='true']"
  ).offset().top;
  var slate_form = $(".slate-form__wrapper > div").height();
  var padding = 20; // tweak here or get from margins etc
  if (window_top + slate_form >= footer_top - padding)
    $(".slate-form__wrapper").css({
      top: (window_top + slate_form - footer_top + padding) * -1,
    });
  else if (window_top + slate_form < footer_top - padding) {
    $(".slate-form__wrapper").css({
      top: "",
    });
  }
}
