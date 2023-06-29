const settingsMenuElement = document.querySelector('.js-settings-menu');
const darkButtonElement = document.getElementById('dark-btn');
function settingsMenuToggle(){
  settingsMenuElement.classList.toggle('settings-menu-toggle');
}

darkButtonElement.onclick = function(){
  darkButtonElement.classList.toggle('dark-btn-on');
  document.body.classList.toggle('dark-theme');

  if(localStorage.getItem('theme') == 'light'){
      localStorage.setItem('theme','dark');
  }
  else {
    localStorage.setItem('theme','light');
  }
}


if(localStorage.getItem('theme') == 'light'){
  darkButtonElement.classList.remove('dark-btn-on');
  document.body.classList.remove('dark-theme');

}
else if(localStorage.getItem('theme') == 'dark'){
  darkButtonElement.classList.add('dark-btn-on');
  document.body.classList.add('dark-theme');

}
else{
  localStorage.setItem('theme','light');
}