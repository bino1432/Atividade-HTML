let Btn1P1 = document.getElementById('Btn1P1');
let Btn2P1 = document.getElementById('Btn2P1');
let Btn3P1 = document.getElementById('Btn3P1');
let Btn4P1 = document.getElementById('Btn4P1');

let Btn1P2 = document.getElementById('Btn1P2');
let Btn2P2 = document.getElementById('Btn2P2');
let Btn3P2 = document.getElementById('Btn3P2');
let Btn4P2 = document.getElementById('Btn4P2');

let Btn1P3 = document.getElementById('Btn1P3');
let Btn2P3 = document.getElementById('Btn2P3');
let Btn3P3 = document.getElementById('Btn3P3');
let Btn4P3 = document.getElementById('Btn4P3');

let Btn1P4 = document.getElementById('Btn1P4');
let Btn2P4 = document.getElementById('Btn2P4');
let Btn3P4 = document.getElementById('Btn3P4');
let Btn4P4 = document.getElementById('Btn4P4');

let Btn1P5 = document.getElementById('Btn1P5');
let Btn2P5 = document.getElementById('Btn2P5');
let Btn3P5 = document.getElementById('Btn3P5');
let Btn4P5 = document.getElementById('Btn4P5');

let Pergunta1 = document.getElementById('Pergunta1');
let Pergunta2 = document.getElementById('Pergunta2');
let Pergunta3 = document.getElementById('Pergunta3');
let Pergunta4 = document.getElementById('Pergunta4');
let Pergunta5 = document.getElementById('Pergunta5');

Btn1P1.addEventListener('click', Responder1PergC);
Btn2P1.addEventListener('click', Responder1PergE);
Btn3P1.addEventListener('click', Responder1PergE);
Btn4P1.addEventListener('click', Responder1PergE);

Btn1P2.addEventListener('click', Responder2PergE);
Btn2P2.addEventListener('click', Responder2PergE);
Btn3P2.addEventListener('click', Responder2PergE);
Btn4P2.addEventListener('click', Responder2PergC);

Btn1P3.addEventListener('click', Responder3PergE);
Btn2P3.addEventListener('click', Responder3PergC);
Btn3P3.addEventListener('click', Responder3PergE);
Btn4P3.addEventListener('click', Responder3PergE);

Btn1P4.addEventListener('click', Responder4PergE);
Btn2P4.addEventListener('click', Responder4PergE);
Btn3P4.addEventListener('click', Responder4PergC);
Btn4P4.addEventListener('click', Responder4PergE);

Btn1P5.addEventListener('click', Responder5PergE);
Btn2P5.addEventListener('click', Responder5PergE);
Btn3P5.addEventListener('click', Responder5PergE);
Btn4P5.addEventListener('click', Responder5PergC);

function Responder1PergE(){
    
    Pergunta2.className = "Aparece"
    Pergunta1.className = "NaoAparece";
}
function Responder1PergC(){

    let Contador = document.getElementById('ContadorNum');
    let ponto = parseInt(Contador.textContent) + 1;
    Contador.textContent = ponto;

    Pergunta2.className = "Aparece"
    Pergunta1.className = "NaoAparece";
}

function Responder2PergE(){
    
    Pergunta3.className = "Aparece"
    Pergunta2.className = "NaoAparece";
}
function Responder2PergC(){

    let Contador = document.getElementById('ContadorNum');
    let ponto = parseInt(Contador.textContent) + 1;
    Contador.textContent = ponto;

    Pergunta3.className = "Aparece"
    Pergunta2.className = "NaoAparece";
}

function Responder3PergE(){
    
    Pergunta4.className = "Aparece"
    Pergunta3.className = "NaoAparece";
}
function Responder3PergC(){

    let Contador = document.getElementById('ContadorNum');
    let ponto = parseInt(Contador.textContent) + 1;
    Contador.textContent = ponto;

    Pergunta4.className = "Aparece"
    Pergunta3.className = "NaoAparece";
}

function Responder4PergE(){
    
    Pergunta5.className = "Aparece"
    Pergunta4.className = "NaoAparece";
}
function Responder4PergC(){

    let Contador = document.getElementById('ContadorNum');
    let ponto = parseInt(Contador.textContent) + 1;
    Contador.textContent = ponto;

    Pergunta5.className = "Aparece"
    Pergunta4.className = "NaoAparece";
}

function Responder5PergE(){
    
}
function Responder5PergC(){

    let Contador = document.getElementById('ContadorNum');
    let ponto = parseInt(Contador.textContent) + 1;
    Contador.textContent = ponto;


}


// let AddNome = document.getElementById('AddNome');

// let ItensLocalStorage = JSON.parse(localStorage.getItem('itens')) || [];

// ItensLocalStorage.forEach(AdicionarNome);

// AddNome.addEventListener('click', function AdicionarNome() {
    
//     let CampoNome = CampoNome.value;

//     alert("Cadastrado");

// });