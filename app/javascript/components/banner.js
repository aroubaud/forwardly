import Typed from 'typed.js';

function loadDynamicBannerText() {
  if (document.getElementById("banner-typed-text")) {
    new Typed('#banner-typed-text', {
      strings: ["software engineering", "data science", "product", "design"],
      typeSpeed: 80,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
