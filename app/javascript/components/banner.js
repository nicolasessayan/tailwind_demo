import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
