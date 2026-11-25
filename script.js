const menuButton = document.getElementById('menuButton');
const menuPopover = document.getElementById('menuPopover');
if (menuButton && menuPopover) {
  menuButton.addEventListener('click', () => menuPopover.classList.toggle('open'));
  document.addEventListener('click', (event) => {
    if (!menuPopover.contains(event.target) && event.target !== menuButton) {
      menuPopover.classList.remove('open');
    }
  });
}
const clock = document.getElementById('clock');
if (clock) {
  const updateClock = () => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('id-ID', {hour: '2-digit', minute: '2-digit', hour12: false});
  };
  updateClock();
  setInterval(updateClock, 60000);
}
