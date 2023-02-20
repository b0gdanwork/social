export default function handleCallibriHide() {

  const callibri = document.querySelector('.callibri-module-area');
  if (!callibri) { return; }

  window.addEventListener('navLayerOpen', () => {
    callibri.classList.add('modal-mode');
  })

  window.addEventListener('navLayerClose', () => {
    callibri.classList.remove('modal-mode');
  })

}