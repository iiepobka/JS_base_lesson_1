'use strict';

// Первая задача
let temperature_c = parseInt(prompt('Введите цифрами температуру в градусах Цельсия:'));


function temperature(t_c) {
    let t_f = (9 / 5) * t_c + 32;
    return t_f;
}

let temperature_f = temperature(temperature_c);

alert('Температура в градусах Фарингейта: ' + temperature_f + '.');

// Вторая задача
let name = 'Василий';
let admin = name;
alert('Нашего админа зовут ' + admin + '.');

// Тетья задача
let number = 1000;
let str = '108'
let result = number + str
alert('JS-выражение 1000 + "108" равно: ' + result + '.');

// Четвертое задание в html документе

