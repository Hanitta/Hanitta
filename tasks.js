// Типы данных и переменные
let name = 'Anna';
console.log(name);
name = 'Irina';
console.log(name);

//Условный оператор if
let i = 1;
if (i == 1) {
    console.log('true');
} else {
    console.log('false');
}

//Циклический оператор for
for (let i=0; i<= 9; i++) {
    console.log(i);
}

//Функции:
function sum (p1, p2, p3) {
    let result = p1 +p2 + p3;
    return result;
}

let muSum = sum(10, 20, 30);
console.log(muSum);

let muSum2 = sum(100, 200, 300);
console.log(muSum2);

// Массивы и объекты:

//Задание 1:
let array = ['привет', 'loftschool'];
array.push ('я изучаю', 'javascriot');
console.log(array.length);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Задание 2:
let array = ['110', '200', '4', '5', '6', '7', '8', '900', '0'];
for (let k = 0; k <= array.length; k++) {
    if (array[k] >= 100) {
        console.log(array[k]);
    }
}

//Задание 3:
let obj = {name: 'Анна', lastName: 'Лапкина', age: '26'};
console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.gender = 'Ж';
console.log(obj.gender);

//Задание 4: 111111111111111111111111111111111111111111
let obj = {name: 'Анна', lastName: 'Лапкина', age: '26'};
function hello(human) {
    
    let phrase = 'Привет, меня зовут ' + human.name + ' ' + human.lastName + ' и мне ' + human.age + ' лет!';
    return phrase;
}
phrase = hello(obj);
console.log(phrase);

//Задачи по работе c DOM
//Задание 1:
const elem1 = document.createElement('div');
document.body.appendChild(elem1);
elem1.textContent = 'Этот элемент создан при помощи DOM API';

//Задание 2:
const elem1 = document.createElement('div');
document.body.appendChild(elem1);
elem1.textContent = 'Этот элемент создан при помощи DOM API';

const elem2 = document.createElement('div');
elem2.classList.add('inner');
elem2.textContent = 'Этот элемент тоже создан при помощи DOM API';
elem1.appendChild(elem2);

//Задание 3:
const elem2 = document.createElement('div');
elem2.classList.add('inner');
document.body.appendChild(elem2);
elem2.textContent = 'Этот элемент тоже создан при помощи DOM API';
elem2.style.color = 'red';

//Задание 4:
const elem1 = document.createElement('div');
document.body.appendChild(elem1);
elem1.textContent = 'Этот элемент создан при помощи DOM API';

elem1.addEventListener('click', function () {
    console.log('Этот текст говорит о том, что я всё сделал правильно');
})

//Задание 5:
const elem1 = document.createElement('a');
elem1.setAttribute('href', 'https://loftschool.com');
elem1.textContent = ('ссылка')
document.body.appendChild(elem1);
elem1.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Я кликнул на ссылку ' + elem1.href);
})

//Задание 6:1111111111111111111111111111111111111111111
const muForm = document.createElement('form');
document.body.appendChild(muForm);

const elem1 = document.createElement('input');
muForm.appendChild(elem1);
elem1.setAttribute('name', 'text')

const elem2 = document.createElement('button');
elem2.textContent = ('кнопка')
muForm.appendChild(elem2);


elem2.addEventListener ('click', function(event) {
    event.preventDefault();
    console.log(muForm.elements.text.value);
})