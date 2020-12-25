export default function initScrollSmooth() {
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