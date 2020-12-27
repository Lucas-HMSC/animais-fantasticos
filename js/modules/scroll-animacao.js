export default function initAnimationScroll() {
  const scetions = document.querySelectorAll('[data-anime="scroll"]');

  if (scetions.length){
    const windowHalf = window.innerHeight * 0.6;
  
    function animaScroll(){
      scetions.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalf) < 0
        if (isSectionVisible){
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')){
          section.classList.remove('ativo');
        }
      });
    }
    animaScroll();
    
    window.addEventListener('scroll', animaScroll);
  }
}