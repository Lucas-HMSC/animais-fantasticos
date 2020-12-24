/*
 * Exercícios realizados durante o módulo de DOM Para Iniciantes
*/

//=========================================================================
/* Exercício 001  */

// Retorne no console todas as imagens do site
const imgs = document.getElementsByTagName('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsFilter = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgsFilter);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');
console.log(lastP[lastP.length - 1]);

//=========================================================================
/* Exercício 002  */

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((p) => {
  console.log(p);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((p) => {
  console.log(p.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

//=========================================================================
/* Exercício 003  */

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
  console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const firstItemMenu = itensMenu[0];
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});
firstItemMenu.classList.add('ativo');
console.log(itensMenu);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img, i) => {
  if (!img.hasAttribute('alt')){
    console.log(`${i} - Não possui alt Text`);
  } else {
    console.log(`${i} - Possui alt Text`);
  }
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://github.com/Lucas-HMSC')

//=========================================================================
/* Exercício 004  */

// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somarImagens() {
  const imgs = document.querySelectorAll('img');
  let larguraAll = 0;
  imgs.forEach((img) => {
    larguraAll += img.offsetWidth;
  });
  console.log(larguraAll);
}
window.onload = () => {
  somarImagens();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link, i) => {
  if (link.offsetHeight >= 48 && link.offsetWidth >= 48){
    console.log(`${i} - possui o minimo recomendado`);
  } else {
    console.log(`${i} - não possui o minimo recomendado`);
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const janelaBrowser = window.matchMedia('(max-width: 720px)').matches;
if (janelaBrowser){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
  console.log(menu);
}