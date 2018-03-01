let liga = document.querySelector('.lampada');

function acende(){
  liga.style.transition = '1s';
  liga.style.backgroundImage = "url('img/ligada.jpg')";
}

let desliga = document.querySelector('.lampada');
function apaga(){
  desliga.style.transition = '1s';
  desliga.style.backgroundImage = "url('img/desligada.jpg')";
}

let quebrar= document.querySelector('.lampada');
function quebra(){
quebrar.style.transition = '1s';
quebrar.style.backgroundImage = "url('img/quebrada.jpg')";
}
