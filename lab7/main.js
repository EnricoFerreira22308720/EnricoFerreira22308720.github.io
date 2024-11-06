const title = document.querySelector('#main-title');
const text = document.querySelector('#text');
const background = document.querySelector('#background');
const background_color = document.querySelector('#background_color');
const corpo = document.querySelector('#corpo');





const buttonRed = document.querySelector('#click-red');
const buttonGreen = document.querySelector('#click-green');
const buttonBlue = document.querySelector('#click-blue');


const inputField = document.querySelector('#input-field');
const hoverBox = document.querySelector('#hover-box');


const click_button = document.querySelector('#click-button')
const number = document.querySelector('#number')


hoverBox.addEventListener('mouseover', function() {
    title.textContent = "Obrigado por Passares!";
});
hoverBox.addEventListener('mouseout', function() {
    title.textContent = "Passa por aqui";
});


buttonRed.addEventListener('click', function() {
    text.style.color = "red"
});
buttonGreen.addEventListener('click', function() {
    text.style.color = "green"
});
buttonBlue.addEventListener('click', function() {
    text.style.color = "blue"
});






background.addEventListener('input', function() {
    const cores = ["red", "blue", "green", "pink"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    background.style.backgroundColor = corAleatoria;

});


background_color.addEventListener('input', function() {
    const val = background_color.value;
    corpo.style.backgroundColor = val;
});

let val = 0;

click_button.addEventListener('click', function(){
    val += 1;
    number.textContent = val;
});