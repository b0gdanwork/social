//модальные окна

export default function setModals(context) {

  context.require(['micromodal', 'debounce'], function(MicroModal, debounce) {

    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const animationTime = 300;
  
    function addCloseEvents(modal, MicroModal) {
  
      const overlay = modal.querySelector('.modal__overlay');
      const closeBtn = modal.querySelector('.modal__close');
      const dragger = modal.querySelector('.modal__container');
      const container = modal.querySelector('.modal__container');
      const scrollWrapper = modal.querySelector('.modal__main');
  
      let oldWidth = window.innerWidth;
  
      window.addEventListener('resize', debounce(()=>{
        oldWidth = window.innerWidth
      }), 150);
  
      if (overlay) {
        overlay.addEventListener('click', MicroModal.overlayCloseClickHandler)
      }
      if (closeBtn) {
        closeBtn.addEventListener('click', MicroModal.buttonCloseClickHandler)
      }
  
      if (!dragger || dragger.classList.contains('js-dragger')) { return; } 
  
      dragger.classList.add('js-dragger');
  
      let startPoint;
      let holdTime = 0;
      let delta;
      let holdInterval;
      let scrollDetected = false;
      let elementHeight = 0;
  
      dragger.addEventListener('touchstart', (event) => {
        if (event.touches.length !== 1) { return; }
        
        elementHeight = dragger.getBoundingClientRect().height;

        if (scrollWrapper) {
          scrollDetected = (event.target === scrollWrapper || event.target.parentNode.closest('.modal__main')) && scrollWrapper.scrollTop > 0;
        }

        delta = 0;
        
        transition = ''; 
        startPoint = event.touches[0].pageY;
        holdInterval = setInterval(() => {
          holdTime += 50
        }, 50);
      })
  
      dragger.addEventListener('touchmove', (e) => {
        delta = e.touches[0].pageY - startPoint;

        if (scrollDetected) { return; }
  
        transform.translate = {
          y: delta,
        };
  
        requestElementUpdate(dragger);
      })
  
      dragger.addEventListener('touchend', (e) => {
        const innerTouches = Array.from(e.touches).filter((touch) => touch.target === dragger || touch.target.parentNode.closest('.dragger'));
        if (innerTouches.length) { return; }

        if (Math.abs(delta) >= elementHeight * 25 / 100) {
          if (scrollDetected) { return; }
  
          startPoint = null;
          clearInterval(holdInterval);
          
          window.requestAnimationFrame(() => {
            let timer = setTimeout(() => {
              let modal = container.closest('.modal');
              let inertia = 0
              
              if (delta >= 0) {
                inertia = delta + 100;
              } else {
                inertia = delta - 100;
              }
      
              closeModalWithInertia(container, inertia);
              startPoint = null;
              clearInterval(holdInterval);
              MicroModal.close(modal.id);
  
              clearTimeout(timer);
            }, 0);
          })
        } else {
          startPoint = null;
          clearInterval(holdInterval);
          
          window.requestAnimationFrame(() => {
            let timer = setTimeout(() => {
              transform.translate = { y: 0 };
              transition = `transform ${animationTime}ms ease`;
              requestElementUpdate(container);
              startPoint = null;
              clearTimeout(timer);
            }, 0);
          })
        }
  
        holdTime = 0;
      })
    }
  
    let ticking = false;
    let transform = {};
    let transition = '';
  
    function updateElementTransform(container) {
      if (!transform.translate) { return; }
  
      const value = `translate3d(0px, ${transform.translate.y}px, 0px)`;
      
      container.style.webkitTransform = value;
      container.style.mozTransform = value;
      container.style.transform = value;
  
      container.style.transition = transition;
      ticking = false;
    }
  
    function requestElementUpdate(container) {
      if(!ticking) {
        requestAnimationFrame(() => {updateElementTransform(container)});
        ticking = true;
      }
    }
  
    function removeCloseEvents(modal, MicroModal) {
      const overlay = modal.querySelector('.modal__overlay');
      const closeBtn = modal.querySelector('.modal__close');
      if (overlay) {
        overlay.removeEventListener('click', MicroModal.overlayCloseClickHandler)
      }
      if (closeBtn) {
        closeBtn.removeEventListener('click', MicroModal.buttonCloseClickHandler)
      }
    }
  
    MicroModal.overlayCloseClickHandler = function(e) {
      const modal = e.target.closest('.modal');
      const container = e.target.closest('.modal').querySelector('.modal__container');
  
      if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container')) {
        closeModalWithInertia(container, 100);
        MicroModal.close(modal.id);
      }
    }
  
    MicroModal.buttonCloseClickHandler = function(e) {
      const modal = e.target.closest('.modal');
      const container = e.target.closest('.modal').querySelector('.modal__container');
  
      closeModalWithInertia(container, 100);
      MicroModal.close(modal.id);
    }
  
    function closeModalWithInertia(container, inertia) {
      transform.translate = { y: inertia };
      transition = `transform ${animationTime}ms ease`;
      requestElementUpdate(container);
      
      let clearTimer = setTimeout(() => {
        transform.translate = { y: 0 };
        transition = ''; 
  
        container.removeAttribute('style');
        clearTimeout(clearTimer);
      }, animationTime);
    } 
  
    function setTriggers() {
      let modalTriggers = document.querySelectorAll("[data-modal-open]");
      if (!modalTriggers || !modalTriggers.length) { return; }
  
      modalTriggers.forEach((trigger) => {
        
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
  
          MicroModal.show(trigger.dataset.modalOpen, {
            onShow: (modal) => {
              addCloseEvents(modal, MicroModal);
              
              window.dispatchEvent(new Event('blockScroll'));
  
              const event = new CustomEvent('MicroModalOpen', {
                detail: { modal: modal }
              });
              window.dispatchEvent(event);
            },
            onClose: (modal) => {
              removeCloseEvents(modal, MicroModal);
              
              window.dispatchEvent(new Event('allowScroll'));
  
              const event = new CustomEvent('MicroModalClose', {
                detail: { modal: modal }
              });
              window.dispatchEvent(event);
            },
        
            awaitOpenAnimation: true,
            awaitCloseAnimation: true,
            openTrigger:'data-modal-open',
            closeTrigger:'data-modal-close',
            disableScroll: false,
            disableFocus: true
          });
        })
      })
    }
  
    setTriggers();
  
    // дополнительны слушатель для иницыализации модалок
    window.addEventListener('initMicroModals', setTriggers)
  });

} 