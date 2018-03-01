// alert('Olá mundo');

// console.log('só um teste...');

let quadrado = document.querySelector('div');
quadrado.style.border = '5px solid grey';
quadrado.style.height = '400px';
quadrado.style.backgroundColor='red';
quadrado.innerHTML = '<marquee>Aqui vem uma mensagem</marquee>';


let quadrado2 = document.querySelector('.div2');
quadrado2.style.border = '5px solid yellow'; 
quadrado2.style.color = 'white';
quadrado2.style.backgroundColor = 'black';
quadrado2.innerHTML = '<marquee> Aqui vem outra mensagem</marquee>';



let quadrado3 = document.querySelector('.div3');
function rodar(){
    quadrado3.style.transition = '1s';
    quadrado3.style.transform = 'rotateY(150deg)';
    setTimeout(img, 1000);

}
function img(){
    quadrado3.style.backgroundImage = "url('img/JOKER.jpg')";
}

let quadrado4 = document.querySelector('.div4');



