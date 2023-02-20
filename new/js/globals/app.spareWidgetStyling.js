export default function handleSpareWidgets(context) {

  const body = document.querySelector('body');
  let shadowNode = document.querySelector('pf-widget');

  if (shadowNode) {
    handleShadowNode()
  } else {
    const config = {
      attributes: false,
      childList: true,
      subtree: false,
    };

    const callback = function(mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type !== 'childList') { return; }
        
        if (!mutation.addedNodes || !mutation.addedNodes.length) { return; }
        
        shadowNode = document.querySelector('pf-widget');
        if (!shadowNode) { return; }

        handleShadowNode();
        observer.disconnect();
       }
    };

    const observer = new MutationObserver(callback);
    observer.observe(body, config);
  }


  function handleShadowNode() {
    let styleNode = document.createElement('style');
    styleNode.innerHTML = `
      .pfWidgetBtn{width:60px!important;height:60px!important}
      .pfWidgetBtnWrapWhatsapp{width:60px!important;height:60px!important}
      .pfWidgetInner{width:60px!important;height:60px!important}
      .pfWidget{z-index:103!important;margin:0!important}
      .pfWidgetBtnBorder{width:60px!important;height:60px!important}
      @media (min-width: 1px) and (max-width: 768px) {
        .pfWidget {
          bottom: 60px !important;
        }
        .pfWidgetBtn{width:50px!important;height:50px!important}
        .pfWidgetBtnWrapWhatsapp{width:50px!important;height:50px!important}
        .pfWidgetInner{width:50px!important;height:50px!important}
        .pfWidgetBtnBorder{width:50px!important;height:50px!important}
      }
    `;
    shadowNode.shadowRoot.appendChild(styleNode);
  }

}
