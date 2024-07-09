/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15; //expression statement

const myObject = {
  //statement
  x: 10,
  y: true,
};

myObject.z = "abc"; //expression

delete myObject.x; //expression statement

let newVariable; //statement

newVariable = 30 + 5; //expression statement

console.log(newVariable); //expression statement

//statement
if (newVariable > 10) {
  //expression
  console.log(`${newVariable} больше 10`);
}
