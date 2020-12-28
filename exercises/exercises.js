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

//=========================================================================
/* Exercício 005  */

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClick(event){
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  this.classList.add('ativo');
  console.log(linksInternos);
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.body;

function handleBody(event) {
  console.log(event.target);
}

elementos.addEventListener('click', handleBody);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleBodyRemove(event) {
  event.preventDefault();
  event.target.remove();
}

elementos.addEventListener('click', handleBodyRemove);

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function aumentaTexto(event) {
  if (event.key === 't'){
    document.documentElement.classList.toggle('textomaior');
  }
}

elementos.addEventListener('keydown', aumentaTexto);

//=========================================================================
/* Exercício 006  */

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode(true);
const copy = document.querySelector('.copy');
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const firstDt = document.querySelector('.faq-lista dt');
console.log(firstDt);

// Selecione o DD referente ao primeiro DT
const nextDt = firstDt.nextElementSibling;
console.log(nextDt);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.outerHTML;
console.log(animais);

/*
 * Exercícios realizados durante o módulo de Objetos
*/

//=========================================================================
/* Exercício 007  */

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + ' andou...');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
  this.elements = document.querySelectorAll(seletor);
  this.addClass = (classe) => {
    this.elements.forEach((item) => {
      item.classList.add(classe);
    });
  };
  this.removeClass = (classe) => {
    this.elements.forEach((item) => {
      item.classList.remove(classe);
    });
  };
}

//=========================================================================
/* Exercício 008  */

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const autor = new Pessoa('Lucas', 'Carvalho', 21);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;            // HTMLLIElement
li.click;      // Function
li.innerText;  // String
li.value;      // Number
li.hidden;     // Boolean
li.offsetLeft; // Number
li.click();    // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String

//=========================================================================
/* Exercício 009  */

// Liste 5 objetos nativos
const nativos = [
  'Number',
  'Boolean',
  'String',
  'Array',
  'Function'
];

// Liste 5 objetos do browser
const browser = [
  'Document',
  'NodeList',
  'HTMLCollection',
  'Element',
  'Window'
];
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
const chrome = [
  'webkitHidden',
  'webkitIsFullScreen'
];

//=========================================================================
/* Exercício 010  */

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaTaxa = 0,
    somaRecebimento = 0;

transacoes.forEach((item) => {
  if (item.descricao.includes('Taxa')){
    let valor = item.valor.slice(2);
    somaTaxa += Number(valor);
  } else if (item.descricao.includes('Recebimento')){
    valor = item.valor.slice(2);
    somaRecebimento += Number(valor);
  }
});
console.log('Somatório de taxas: ' + somaTaxa);
console.log('Somatório de recebimentos: ' + somaRecebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const lista = transportes.split(';');
console.log(lista);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlAdaptado = html.split('span').join('a');
console.log(htmlAdaptado);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let qtd = 0;
transacoes.forEach((item) => {
  if (item.trim().toUpperCase().includes('TAXA')){
    qtd++;
  }
});
console.log(`Foi encontrado ${qtd} itens de Taxa.`);

//=========================================================================
/* Exercício 011  */

// Retorne um número aleatório
// entre 1050 e 2000
let aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumber = numeros.split(', ');
console.log(Math.max(...arrayNumber));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
const novaLista = new Array();
let somaTotal = 0;
function limpaPreco(lista) {
  lista.forEach((preco) =>{
    novaLista.push(Math.round(Number.parseFloat(preco.trim().slice(2).trim().replace(',', '.'))));
  });
  novaLista.forEach((novoPreco) => {
    somaTotal += novoPreco;
  });
}
limpaPreco(listaPrecos);
console.log(novaLista); // [60, 100, 230, 200]
console.log(somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // R$ 590,00

//=========================================================================
/* Exercício 012  */

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comida1 = comidas.shift();
console.log(comida1); // Pizza

// Remova o último valor de comidas e coloque em uma variável
const comida2 = comidas.pop();
console.log(comida2); // Macarrão

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas); // ["Frango", "Carne", "Arroz"]

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas); // ["Peixe", "Batata", "Frango", "Carne", "Arroz"]

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());

// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes
if (estudantes.includes('Joana')){
  console.log('Joana faz parte dos estudantes');
}

// Verifique se Juliana faz parte dos estudantes
if (estudantes.includes('Juliana')){
  console.log('Juliana faz parte dos estudantes');
} else {
  console.log('Juliana não faz parte dos estudantes');
}

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.slice();
carros.pop();
console.log(carros);
console.log(cloneCarros);

//=========================================================================
/* Exercício 013  */

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const ex013 = [];
cursos.forEach((item, index) => {
  return ex013[index] = {
    titulo: (item.querySelector('h1')).innerText,
    descricao: (item.querySelector('p')).innerText,
    aulas: (item.querySelector('.aulas')).innerText,
    horas: (item.querySelector('.horas')).innerText,
  }
});

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numMaior100 = numeros.filter((num) => {
  return num > 100;
});

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const possuiBaixo = instrumentos.some(item => item === 'Baixo');


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acumulador, atual) => {
  return acumulador += +(atual.preco.slice(2).replace(',', '.'));
}, 0);

//=========================================================================
/* Exercício 014  */

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const textoParagrafo = document.querySelectorAll('p');
const somaTotal = Array.prototype.reduce.call(textoParagrafo, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);
console.log(somaTotal); // 655

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novaFuncao = criarElemento.bind(null, 'h1', 'titulo');

//=========================================================================
/* Exercício 015  */

// Crie uma função que verifique
// corretamente o tipo de dado
function tipoDado(dado) {
  return Object.prototype.toString.call(dado);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4
  }
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

/*
 * Exercícios realizados durante o módulo de Efeitos no DOM
*/

//=========================================================================
/* Exercício 016  */

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarClase() {
  document.body.classList.toggle('active');
}

setInterval(mudarClase, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar  = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar');
const tempo  = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
}

/*
 * Exercícios realizados durante o módulo de JavaScript Assíncrono
*/

//=========================================================================
/* Exercício 017  */

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.querySelector('#cep');
const btnCep = document.querySelector('#btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  })
}

//setInterval(fetchBtc, 1000 * 30);
fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');
function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  })
}

btnProxima.addEventListener('click', puxarPiada);

/*
 * Exercícios realizados durante o módulo de Mais JavaScript
*/

//=========================================================================
/* Exercício 018  */

// Remova o erro
priceNumber('R$ 99,99');
const priceNumber = n => +n.replace('R$', '').replace(',', '.');

const priceNumber = n => +n.replace('R$', '').replace(',', '.'); 
console.log(priceNumber('R$ 99,99'))

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function() {
const codigoIsolado = "IIFE";
console.log(codigoIsolado);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function() {
  console.log('Função ativada');
});