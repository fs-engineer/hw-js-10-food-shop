'use strict';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  switchInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

handleDefaultTheme();

ref.switchInput.addEventListener('change', handleSwitchTheme);

function handleSwitchTheme() {
  if (ref.switchInput.checked) {
    ref.body.classList.toggle(Theme.LIGHT);
    ref.body.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else if (!ref.switchInput.checked) {
    ref.body.classList.toggle(Theme.LIGHT);
    ref.body.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
  console.log(ref.switchInput.checked);
}

function handleDefaultTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    ref.body.classList.toggle(Theme.DARK);
    ref.switchInput.checked = true;
  } else {
    ref.body.classList.toggle(Theme.LIGHT);
    ref.switchInput.checked = false;
  }
}
