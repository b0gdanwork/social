// сообщение о использовании куки

export default function setCookies(context) {
  const cookieMessage  = document.querySelector('.metadata-warning');
  const cookieMessageBtn = document.querySelector('.metadata-warning__btn');

  if (!cookieMessage || !cookieMessageBtn) { return; }

  context.require(['js-cookie'], function(Cookies) {
    if (Cookies.get('metadata-warning') !== 'accepted') {
      cookieMessage.classList.remove('sleep');
      cookieMessageBtn.addEventListener('click', cookieMessageHandler);
    }
  
    function cookieMessageHandler() {
      cookieMessage.classList.add('sleep');
      Cookies.set('metadata-warning', 'accepted', {expires: 365, path: '/'});
    };
  });

} 