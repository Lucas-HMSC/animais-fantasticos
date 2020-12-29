import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuLista, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuLista = document.querySelector(menuLista);
    this.activeClass = 'active';
    
    // define touchstart e click como argumento padrão de events caso o usuário não define 
    if (events === undefined){
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    this.menuLista.classList.add(activeClass);
    this.menuButton.classList.add(activeClass);
    outsideClick(this.menuLista, this.events, () => {
      this.menuLista.classList.remove(activeClass);
      this.menuButton.classList.remove(activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuLista){
      this.addMenuMobileEvents();
    }
    return this;
  } 
}