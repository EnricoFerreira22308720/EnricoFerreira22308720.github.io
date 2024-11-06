const title = document.querySelector('#main-title');

const background = document.querySelector('#background');
const background_color = document.querySelector('#background_color');
const corpo = document.querySelector('#corpo');




const text = document.querySelector('#text');
const click = document.querySelector('#click');



const inputField = document.querySelector('#input-field');
const hoverBox = document.querySelector('#hover-box');


const click_button = document.querySelector('#click-button')
const number = document.querySelector('#number')

const selecter = document.querySelector('#selecter')


hoverBox.addEventListener('mouseover', function() {
    title.textContent = "Obrigado por Passares!";
});
hoverBox.addEventListener('mouseout', function() {
    title.textContent = "Passa por aqui";
});





document.querySelectorAll("#click").forEach((e) => {
    const vala = e.addEventListener('click', function() {
        text.style.color = e.dataset.color;
    });
})



background.addEventListener('input', function() {
    const cores = ["red", "blue", "green", "pink"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    background.style.backgroundColor = corAleatoria;

});




let val = 0;

click_button.addEventListener('click', () =>{
    val += 1;
    number.textContent = val;
});


selecter.addEventListener('change', function(){
    corpo.style.backgroundColor = this.value;
});