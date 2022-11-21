// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import Masonry from "masonry-layout";

window.addEventListener('DOMContentLoaded', () => {

  let grid = document.querySelector('.feedback-page__cards');

  if (grid) {
    let msnry = new Masonry(grid, {
      itemSelector: '.feedback__card',
      gutter: 0,
      // percentPosition: true,
      // horizontalOrder: true,
      fitWidth: true
    });
  }

})