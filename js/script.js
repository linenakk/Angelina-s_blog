console.log('Hello11'+' world'); // Конкотенация (Слепить строки)
console.info('Hello'+' world'); // тоже самое
//alert('всплывающее окно')
document.getElementById('out').innerHTML = 'Art'; // innerHTML-присвоение

document.querySelector('.head').innerHTML = 'замена классов';  // более новая ве6рсия. заменяет первый встречный селектор. Эта инструкция более гибкая
document.querySelector('#one').innerHTML = 'Замена id'// тожесамое и с getElementById, но без #

let b; //Лет- это объявление переменной. 2 раза одну переменную объявлять нельзя
let a = document.querySelector('#one'); //внутрь а получил параграф.


let c; //можно сначала объявить
c = document.querySelector('.head'); //потом присвоить
a.innerHTML=999;
c.innerHTML=999;

function name(){
    alert('hello');
}
name();