const settingsMenuElement = document.querySelector('.js-settings-menu');
const darkButtonElement = document.getElementById('dark-btn');
function settingsMenuToggle(){
  settingsMenuElement.classList.toggle('settings-menu-toggle');
}

darkButtonElement.onclick = function(){
  darkButtonElement.classList.toggle('dark-btn-on');
  document.body.classList.toggle('dark-theme');
}
