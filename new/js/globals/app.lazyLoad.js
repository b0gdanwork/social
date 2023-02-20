// ленивая загрузка изображений

export default function setLazyLoad(context) {

  context.require(['vanilla-lazyload'], function(LazyLoad) {
    const LazyLoadInstance = new LazyLoad({
      elements_selector: '[data-src], [data-bg]',
      threshold: 100,
    });
    
    window.addEventListener('lazyLoad', () => {
      LazyLoadInstance.update();
    })
  });

} 