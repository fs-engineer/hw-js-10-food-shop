'use strict';

import galleryTemplate from '../templates/galleryTemplate.hbs';
import menu from '../menu.json';

const menuGallery = document.querySelector('.js-menu');
const markup = galleryTemplate(menu);

menuGallery.insertAdjacentHTML('afterbegin', markup);
console.log(markup);
