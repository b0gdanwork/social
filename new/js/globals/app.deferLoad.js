// отложенная загрузка блоков

export default function setDeferLoad(context) {
  
  const deferScripts = document.querySelectorAll('[data-defer]');
  if (!deferScripts || !deferScripts.length) { return; }
      
  const deferPadding = -300;
  
  function isAnyPartOfElementInViewport(element) {
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      const vertInView = rect.top + deferPadding  <= windowHeight;
      const horInView = rect.left + deferPadding <= windowWidth;

      return vertInView && horInView;
    } else {
      return false;
    }
  }
  
  context.require(['throttle'], function(throttle) {

    deferScripts.forEach((script) => {
      let sections = document.querySelectorAll(script.dataset.defer);
      if (!sections.length) { return; }

      sections.forEach((section) => {
      
        let endListener = function() {
          let timer = setTimeout(() => {
            const deferClass = script.dataset.defer;
            const allTargetedSections = document.querySelectorAll(deferClass);

            if (allTargetedSections.length) {
              allTargetedSections.forEach((targetSection) => {
                targetSection.classList.add('loaded');
              })
            }

            clearTimeout(timer);
          }, 500);
          window.removeEventListener(`${script.dataset.defer}--end`, endListener);
        }

        let logViewport = function () {
          if (isAnyPartOfElementInViewport(section) === true) {
            window.dispatchEvent(new Event(script.dataset.defer));
            window.dispatchEvent(new Event('deferBlockLoaded'));
            window.removeEventListener('scroll', logViewportCallback, false, {passive: true});
            window.addEventListener(`${script.dataset.defer}--end`, endListener);
          }
        };

        let logViewportCallback = throttle(logViewport, 150);
        window.addEventListener('scroll', logViewportCallback, false, {passive: true});

        // проверяем высоту body на случай если его изменил какой-то стиль
        function onElementHeightChange(elm, callback) {
          let lastHeight = elm.clientHeight;
          let newHeight = null;
  
          (function run() {
            newHeight = elm.clientHeight;
            lastHeight != newHeight ? callback(newHeight) : null;
            lastHeight = newHeight;
            elm.onElementHeightChangeTimer ? clearTimeout(elm.onElementHeightChangeTimer) : null;
            elm.onElementHeightChangeTimer = setTimeout(run, 200);
          })();
        }
  
        onElementHeightChange(document.body, function() {
          logViewport();
        });
  
        // проверка на момент загрузки
        logViewport();
      })

    })

  });

}