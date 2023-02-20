export default function handleNoScroll(context) {

  const body = document.querySelector('body');
  const html = document.querySelector('html');

  function setScrollState(state) {
    if (state) {
      allowScroll();
    } else {
      blockScroll();
    }
  }
  
  function blockScroll() {
    if (html.classList.contains('no-scroll-fixed')) { return; }

    html.setAttribute('last-scroll', getBodyScrollTop());
    body.style.top = `-${getBodyScrollTop()}px`;

    body.classList.add('no-scroll-fixed');
    html.classList.add('no-scroll-fixed');
  }
  
  function allowScroll() {
    if (!html.classList.contains('no-scroll-fixed')) { return; }

    const lastScroll = html.getAttribute('last-scroll');
    
    body.style.removeProperty('top');
    body.classList.remove('no-scroll-fixed');
    html.classList.remove('no-scroll-fixed');
    window.scrollTo({ top: +lastScroll });
  }

  function getBodyScrollTop() {
    let top = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    return ''+top;
  }

  window.addEventListener('blockScroll', () => {setScrollState(false)});
  window.addEventListener('allowScroll', () => {setScrollState(true)});
}