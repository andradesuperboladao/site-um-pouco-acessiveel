/* Variaveis */
let titulo = document.querySelector('h1');
let titulo2 = document.querySelectorAll('h2');
let corpo = document.getElementById('corpo');
let cabecalho = document.getElementById('header');
let letras = document.querySelectorAll('p');
let botoes = document.querySelectorAll('button');
let botaomodoleitor = botoes[0];
let btcor = botoes[1];
let btdiminuir = botoes[2];
let btaumentar = botoes[3];
let tudo = document.getElementById('wrapper');
let fadi = document.getElementById('fade');
let modau = document.getElementById('modal');
let nav = document.getElementById('pegar');
let lista = document.querySelectorAll('#listas li');
let linksnav = document.querySelectorAll('#pegar a');
let tema = localStorage.getItem('bodyStyle');
let imgs = document.querySelectorAll('img');
let ultimaTecla = null; 
let modoCegoAtivo = false; 
let tamNovo = parseFloat(window.getComputedStyle(document.body).fontSize);
let fala = false
tamNovo = tamNovo + 'px';

/* Funções */
/* Ativa/desativa modo leitor pro meio do atalho alt+s */
document.addEventListener('keydown', (event) => {
  if (ultimaTecla === 'Alt' && event.key === 's') {
    cego(); 
  }
  ultimaTecla = event.key;
});
document.addEventListener('keyup', () => {
  ultimaTecla = null; 
});
function cego() {
  if (modoCegoAtivo) {
    desativarModoCego();
    return;
  }
  modoCegoAtivo = true; 
  localStorage.setItem('Booleano',JSON.stringify(true));
  if(fala == false){
  
  let fala = new SpeechSynthesisUtterance('modo para deficiente visual ativado');
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
  fala = true;
  }
  focuss();
}
function focuss() {
  imgs.forEach((image) => {
    image.addEventListener('focus', focusImage);
  });

  linksnav.forEach((linques) => {
    linques.addEventListener('focus', focusLink);
  });

  titulo.addEventListener('focus', focusTitulo);

  titulo2.forEach((titulos2) => {
    titulos2.addEventListener('focus', focusTitulo2);
  });

  letras.forEach((lletras) => {
    lletras.addEventListener('focus', focusLetra);
  });

  lista.forEach((listo) => {
    listo.addEventListener('focus', focusLista);
  });
}
function focusImage(event) {
  window.speechSynthesis.cancel();
  let alte = event.target.alt;
  let fala = new SpeechSynthesisUtterance(alte);
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
}
function focusLink(event) {
  window.speechSynthesis.cancel();
  let linquee = event.target.textContent;
  let fala = new SpeechSynthesisUtterance(linquee);
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
}
function focusTitulo() {
  window.speechSynthesis.cancel();
  let tituloContext = titulo.textContent;
  let fala = new SpeechSynthesisUtterance(tituloContext);
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
}
function focusTitulo2(event) {
  window.speechSynthesis.cancel();
  let tituloContext = event.target.textContent;
  let fala = new SpeechSynthesisUtterance(tituloContext);
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
}
function focusLetra(event) {
  window.speechSynthesis.cancel();
  let lletras = event.target.textContent;
  let fala = new SpeechSynthesisUtterance(lletras);
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
}
function focusLista(event) {
  window.speechSynthesis.cancel();
  let llisto = event.target.textContent;
  let fala = new SpeechSynthesisUtterance(llisto);
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
}
/* Anuncia e remove as propriedades usadas no modo leitor */
function desativarModoCego() {
  modoCegoAtivo = false;
  localStorage.setItem('Booleano',JSON.stringify(false));
  window.speechSynthesis.cancel();
  let fala = new SpeechSynthesisUtterance('modo para deficiente visual desativado');
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
  imgs.forEach((image) => {
    image.removeEventListener('focus', focusImage);
  });
  linksnav.forEach((linques) => {
    linques.removeEventListener('focus', focusLink);
  });
  titulo.removeEventListener('focus', focusTitulo);
  titulo2.forEach((titulos2) => {
    titulos2.removeEventListener('focus', focusTitulo2);
  });
  letras.forEach((lletras) => {
    lletras.removeEventListener('focus', focusLetra);
  });
  lista.forEach((listo) => {
    listo.removeEventListener('focus', focusLista);
  });
}
window.onload = () => {
  if (tema === 'dark-mode') {
    btcor.innerHTML = '☀';
  } else {
    btcor.innerHTML = '🌙';
  }
  if (localStorage.getItem('bodyStyle')) {
    corpo.classList.add(localStorage.getItem('bodyStyle'));
  }
  if (localStorage.getItem('txtTam')){
    corpo.style.fontSize = localStorage.getItem('txtTam');
  }
  if (localStorage.getItem('Booleano') === 'false'){
    desativarModoCego();
  } else {
    cego();
  }
}
botaomodoleitor.addEventListener('focus', () => {
  window.speechSynthesis.cancel();
  let fala = new SpeechSynthesisUtterance('clique para ativar o modo deficiente visual, ou use o atalho, Alt + S no teclado');
  fala.rate = 1.3;
  speechSynthesis.speak(fala);
});

/* Mudar tamanho das letras */
function aumentar() {
  window.speechSynthesis.cancel();
  let tamanho = window
    .getComputedStyle(corpo, null)
    .getPropertyValue('font-size');
  if (tamanho < 40 + 'px') {
    let tamanhonov = parseFloat(tamanho) + 2 + 'px';
    corpo.style.fontSize = tamanhonov;
    localStorage.setItem('txtTam', tamanhonov)
  }
};
function diminuir() {
  window.speechSynthesis.cancel();
  let titulotam = window
    .getComputedStyle(corpo, null)
    .getPropertyValue('font-size')
  titulotam += 'px';
  if (titulotam > 20 + 'px') {
    let titulonovo = parseFloat(titulotam) - 2 + 'px';
    corpo.style.fontSize = titulonovo;
    localStorage.setItem('txtTam', titulonovo)
  }
};
/* Modo claro/Modo escuro */
function mudarcor() {
  if (!corpo.className || corpo.classList.contains('ligth-mode')) {
    corpo.classList.remove('ligth-mode');
    corpo.classList.add('dark-mode');
    localStorage.setItem('bodyStyle', 'dark-mode');
    btcor.innerHTML = '☀';
  } else {
    corpo.classList.remove('dark-mode');
    corpo.classList.add('ligth-mode');
    localStorage.setItem('bodyStyle', 'ligth-mode');
    btcor.innerHTML = '🌙';
  }
}