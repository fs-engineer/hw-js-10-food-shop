'use strict';
const ref = {
  switchInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

ref.switchInput.addEventListener('change', handleSwitchInput);

function handleSwitchInput() {
  ref.body.classList.toggle('dark-theme');
}
