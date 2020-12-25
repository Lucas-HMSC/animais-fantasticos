function iniTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  
  if (tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo');
  
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }
  
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
iniTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  if (accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    
    function activeAccordion(){
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    /* Forma alternativa 
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
    */
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSmooth();

function initAnimationScroll() {
  const scetions = document.querySelectorAll('[data-anime="scroll"]');

  if (scetions.length){
    const windowHalf = window.innerHeight * 0.6;
  
    function animaScroll(){
      scetions.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalf) < 0
        if (isSectionVisible){
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }
    animaScroll();
    
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimationScroll();