document.addEventListener('DOMContentLoaded', () => {
  let slateFormDesktop = document.querySelector('.desktop-only');
  let footer = document.querySelector('.bottom-cta');
  // if scroll past .slate-form__desktop-only, set data-sticky to true. Set to false when reach footer
  window.addEventListener('scroll', () => {
    if (window.scrollY > slateFormDesktop.offsetTop) {
      slateFormDesktop.setAttribute('data-sticky', 'true');
    } else {
      slateFormDesktop.setAttribute('data-sticky', 'false');
    }
    // if footer is in viewport, set data-sticky to false
    if (footer.getBoundingClientRect().top < window.innerHeight) {
      slateFormDesktop.style.position = 'fixed';
      slateFormDesktop.style.marginTop = '-' + footer.offsetHeight + 'px';
    } else {
      slateFormDesktop.style.position = '';
      slateFormDesktop.style.marginTop = '';
    }
  });
  window.addEventListener('resize', () => {
    responsiveForm();
  });
  window.addEventListener('load', () => {
    responsiveForm();
  });





  function responsiveForm() {
    // async await .slate-form__wrapper form
    let slateFormMobile = document.querySelector('.slate-form__wrapper form');
    // if slateFormMobile is undefined, wait for it to exist
    if (slateFormMobile === null) {
      setTimeout(responsiveForm, 100);
    }
    let mobileOnlyDiv = document.querySelector('.mobile-only');
    let desktopOnlyDiv = document.querySelector('.desktop-only');
    let mobileOnlyForm = document.querySelector('.mobile-only form');
    if (window.matchMedia('(max-width: 1300px)').matches) {
      slateFormDesktop.setAttribute('data-sticky', 'false');

      if (slateFormMobile !== null) {
        mobileOnlyDiv.appendChild(slateFormMobile);
      }

    } else if (window.matchMedia('(min-width: 1299px)').matches) {
      // if mobileOnlyForm exists

      // if mobileOnlyForm is not in mobileOnlyDiv
      if (mobileOnlyForm !== null) {
        desktopOnlyDiv.appendChild(mobileOnlyForm);
      }

    }
  }
});