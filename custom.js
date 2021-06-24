// javascipt
function sticky_relocate() {
  console.log("shalom ");
  var window_top = $(window).scrollTop();
  var footer_top = $("#footer").offset().top;
  var div_top = $(".smc-lp__text-conatiner").offset().top;
  var div_height = $(".smc-lp__form-container").height();

  if (window_top + div_height > footer_top)
    $(".smc-lp__form-container").removeClass("sticky");
  else if (window_top > div_top) {
    $(".smc-lp__form-container").addClass("sticky");
  } else {
    $(".smc-lp__form-container").removeClass("sticky");
  }
}

$(function () {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});
