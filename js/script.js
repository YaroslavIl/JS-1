// 1 Завдання
let first = prompt("first namber");
let second = prompt("second namber");
let firstNamber = parseInt(first);
let secondNamber = parseInt(second);
console.log('result', firstNamber + secondNamber);
console.log('result', firstNamber - secondNamber);
console.log('result', firstNamber * secondNamber);
console.log('result', firstNamber / secondNamber);

// let firstNamber = prompt("first namber");
// let secondNamber = prompt("second namber");
// console.log(parseInt('result', firstNamber + secondNamber)); // чому тут виходить результат NaN?? а не сума?
// console.log('result', firstNamber - secondNamber);
// console.log('result', firstNamber * secondNamber);
// console.log('result', firstNamber / secondNamber);

// // 2 Завдання
let FirstVar = prompt("first Name");
let SecondVar = prompt("Last Name");
document.write('User Name: ', FirstVar);
document.write('<br>');
document.write('User last name: ', SecondVar);
// 3 Завдання
let uk = prompt();
let ru = prompt();
let booleanValue = true;
let booleanValue2 = false;
let res = uk + booleanValue;
let res2 = ru + booleanValue2;
console.log('task3 uk', res);
console.log('task3 ru', res2);
// 4 Завдання
let a = 22;
let b = 32;
console.log('task4', a > 20 && b > 30);