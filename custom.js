var elementPosition = $('.slate-form__wrapper').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('.slate-form__wrapper').attr('data-fixed', 'true');
        } else {
            $('.slate-form__wrapper').attr('data-fixed', 'false');
        }    
});