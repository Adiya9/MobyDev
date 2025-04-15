//task2
const button = document.querySelector('#jsButton');

button.addEventListener('click',() =>{
    console.log('Событие обработано через JS');
});

//task3
let div = document.querySelector("#myDiv");

div.addEventListener('click',() =>{
    div.style.backgroundColor = 'blue';
});

div.addEventListener('mouseover',() =>{
    console.log('Элемент нажат');
});

//task4
document.addEventListener('keydown',(event) => {
    console.log('Клавиша нажата: ',event.key);
});

//task5
let cancel = document.querySelector('#myLink');
cancel.addEventListener('click',(event) =>{
    event.preventDefault();
    alert('Переход по ссылке отменен');
});

//task6
let list = document.querySelector('#list');
list.addEventListener('click', function(event) {
    if(event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});

//task7
let code = document.querySelector('#keyboardInput');
code.addEventListener('keydown', function(event) {
    console.log(`Pushed key: ${event.key} (code: ${event.code})`);
});