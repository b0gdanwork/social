// импорт общих для всех страниц стилей
import '../stylus/main.styl';

// импорт общих для всех страниц скриптов
import setDeferLoad from './globals/app.deferLoad';
import setModals from './globals/app.modals';
import setCookies from './globals/app.cookies';
import setLazyLoad from './globals/app.lazyLoad';
import addFullHeightVars from './globals/app.fullHeightVars';
import setAnchorLinks from './globals/app.anchorLinks';
import handleNoScroll from './globals/app.noScroll';
import handleCallibriHide from './globals/app.callibriHide';
import addPhotoSwipeElement from './globals/app.photoswipe';
import handleSpareWidgets from './globals/app.spareWidgetStyling';

// глобальная переменная для доступа к импортированным функциям 
const logicModules = {
  setDeferLoad,
  setModals,
  setCookies,
  setLazyLoad,
  addFullHeightVars,
  setAnchorLinks,
  handleNoScroll,
  handleCallibriHide,
  addPhotoSwipeElement,
  handleSpareWidgets,
}

define(['css!assets/front/css/main'], function() {
  require(['domReady'], function(domReady){
    domReady(function() {

      require(['sourcebuster'], function(sourcebuster) {
        sourcebuster.init();
      });

      logicModules.setDeferLoad(this);
      logicModules.setModals(this);
      logicModules.setCookies(this);
      logicModules.setLazyLoad(this);
      logicModules.addFullHeightVars(this);
      logicModules.setAnchorLinks(this);
      logicModules.handleNoScroll(this);
      logicModules.handleCallibriHide(this);
      logicModules.addPhotoSwipeElement(this);
      logicModules.handleSpareWidgets(this);

    });
  });
});