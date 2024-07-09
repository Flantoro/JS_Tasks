/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */
const str = "someString";
const num = 11;
const isBool = true;
const number = null;
let something;
const person = {
  name: "Andrii",
  age: 21,
};
let arr = [1, 2, 3];

console.log(typeof str);
console.log(typeof num);
console.log(typeof isBool);
console.log(typeof number);
console.log(typeof something);
console.log(typeof person);
console.log(typeof arr);
