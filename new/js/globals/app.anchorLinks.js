export default function setAnchorLinks(context) {

  const anchorLinks = document.querySelectorAll('a[href*="#"]:not(.js-layer-body a)');
  if (!anchorLinks.length) { return };
  
  const header = document.querySelector('.header-section');
  const headerMobile = document.querySelector('.header-mobile');
  
  anchorLinks.forEach((link) => {
    handleAnchor(link)
  });

  window.addEventListener('handleAnchor', (e) => {
    let target = getTarget(e.detail.node);
    scrollPage(target, e.detail.node);
  })

  function handleAnchor(link) {
    let target = getTarget(link);

    if (target && link.getAttribute('role') !== 'tab') {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollPage(target, link);
      });
    }
  }

  function getTarget(link) {
    let possibleId = link.getAttribute('href').split('#').filter((e) => e.length);
    let target = null;
    if (possibleId.length >= 1) {
      possibleId.forEach(el => {
        target = document.getElementById(el);
      })
    }

    return target;
  }

  function scrollPage(target, link) {
    let offset = target.offsetTop;

    window.innerWidth > 920 && header ? (offset -= header.offsetHeight) : null;
    window.innerWidth <= 920 && headerMobile ? (offset -= headerMobile.offsetHeight) : null;

    let closestShiftElement = link.closest('.js-shift');
    if (closestShiftElement) {
      offset -= closestShiftElement.getBoundingClientRect().height;
    }

    // полифил для requestAnimationFrame
    const requestAnimationFrameFunction = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60);};
    })();
    
    function scrollToY(scrollTargetY, speed, easing) {
      // speed - сколько пикселей будет пройдено за секунду
      // easing - функция анимации
  
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

      const easingEquations = {
        easeFromTo: function(pos) {
          if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,4);
          return -0.5 * ((pos-=2)*Math.pow(pos,3) - 2);
        },
      };
      
      let currentTime = 0;

      function tickFrame() {
        currentTime += 1 / 60;

        const positionIntTime = currentTime / time;
        const positionInTick = easingEquations[easing](positionIntTime);

        if (positionIntTime < 1) {
          requestAnimationFrameFunction(tickFrame);
          window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * positionInTick));
        } else {
          window.scrollTo(0, scrollTargetY);
        }
      }
  
      tickFrame();
    }
    
    scrollToY(offset, 500, 'easeFromTo');
  }

}
