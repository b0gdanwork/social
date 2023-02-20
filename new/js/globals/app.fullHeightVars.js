// пересчет значения высоты экрана для мобильных браузеров

export default function addFullHeightVars(context) {
  function fixWindowHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  function fixWindowHeightFix() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vhFix', `${vh}px`);
  }

  fixWindowHeight();
  fixWindowHeightFix();
  window.addEventListener('resize', () => {
    fixWindowHeight();
  });
} 