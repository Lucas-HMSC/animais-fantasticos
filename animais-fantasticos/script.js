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
