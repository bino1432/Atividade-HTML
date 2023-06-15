let corFundo = document.getElementById('corFundo');
let titulo = document.getElementById('titulo');
let corTitulo = document.getElementById('corTitulo');
let paragrafo = document.getElementById('paragrafo');
let corParagrafo = document.getElementById('corParagrafo');
let fonteTitulo = document.getElementById('fonteTitulo');
let fonteParagrafo = document.getElementById('fonteParagrafo');
let tudo = document.getElementById('tudo');
let mostrarCorFundo = document.getElementById('mostrarCorFundo');
let mostrarCorTitulo = document.getElementById('mostrarCorTitulo');

let font = [
  'Poppins', 
  'Figtree',
  'Roboto Condensed',
  'Oswald',
  'Playfair Display',
  'Roboto Slab', 
  'Cutive', 
  'Lobster',
  'Lobster Two',
  'Coming Soon',
  'Kablammo', 
  'Special Elite',
  'Press Start 2P',
  'Bruno Ace',
]

corFundo.addEventListener('click', function (){
    let rgb1 = Math.floor(Math.random()*255)
    let rgb2 = Math.floor(Math.random()*255)
    let rgb3 = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = `rgb( ${rgb1}, ${rgb2}, ${rgb3})`;
    mostrarCorFundo.innerText = "Fundo: RGB (" + rgb1 + ", " + rgb2 + ", " + rgb1 + ")";
});

corTitulo.addEventListener('click', function(){
    let rgb1 = Math.floor(Math.random()*255)
    let rgb2 = Math.floor(Math.random()*255)
    let rgb3 = Math.floor(Math.random()*255)
    titulo.style.color = `rgb( ${rgb1}, ${rgb2}, ${rgb3})`;
    mostrarCorTitulo.innerText = "Titulo: RGB (" + rgb1 + ", " + rgb2 + ", " + rgb1 + ")";
});

corParagrafo.addEventListener('click', function(){
    let rgb1 = Math.floor(Math.random()*255)
    let rgb2 = Math.floor(Math.random()*255)
    let rgb3 = Math.floor(Math.random()*255)
    paragrafo.style.color = `rgb( ${rgb1}, ${rgb2}, ${rgb3})`;
    mostrarCorParagrafo.innerText = "Paragrafo: RGB (" + rgb1 + ", " + rgb2 + ", " + rgb1 + ")";
});

fonteTitulo.addEventListener('click', function() {
    let random = Math.floor(Math.random()*15);
    titulo.style.fontFamily = font[random];
});

fonteParagrafo.addEventListener('click', function() {
    let random = Math.floor(Math.random()*15);
    paragrafo.style.fontFamily = font[random];
});

tudo.addEventListener('click', function() {
    
    let rgb1Body = Math.floor(Math.random()*255)
    let rgb2Body = Math.floor(Math.random()*255)
    let rgb3Body = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = `rgb( ${rgb1Body}, ${rgb2Body}, ${rgb3Body})`;
    mostrarCorFundo.innerText = "Fundo: RGB (" + rgb1Body + ", " + rgb2Body + ", " + rgb3Body + ")";

    let rgb1Title = Math.floor(Math.random()*255)
    let rgb2Title = Math.floor(Math.random()*255)
    let rgb3Title = Math.floor(Math.random()*255)
    titulo.style.color = `rgb( ${rgb1Title}, ${rgb2Title}, ${rgb3Title})`;
    mostrarCorTitulo.innerText = "Titulo: RGB (" + rgb1Title + ", " + rgb2Title + ", " + rgb3Title + ")";

    let rgb1Paragraph = Math.floor(Math.random()*255)
    let rgb2Paragraph = Math.floor(Math.random()*255)
    let rgb3Paragraph = Math.floor(Math.random()*255)
    paragrafo.style.color = `rgb( ${rgb1Paragraph}, ${rgb2Paragraph}, ${rgb3Paragraph})`;
    mostrarCorParagrafo.innerText = "Paragrafo: RGB (" + rgb1Paragraph + ", " + rgb2Paragraph + ", " + rgb2Paragraph + ")";

    let randomTitle = Math.floor(Math.random()*15);
    titulo.style.fontFamily = font[randomTitle];

    let randomParagraph = Math.floor(Math.random()*15);
    paragrafo.style.fontFamily = font[randomParagraph];
});