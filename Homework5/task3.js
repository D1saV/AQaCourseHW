/**
 * Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while .

Виберіть число для якого потрібно згенерувати таблицю множення.
Використовуючи цикл for, створіть таблицю множення для обраного числа від 1 до 10. Виведіть результат в консоль.
Використовуючи цикл while створіть аналогічну таблицю множення та виведіть її в консоль.
 */

let numberForMultiplicationMable = 7;


console.log("Результат виконання за допомогою циклу for");
for(let i = 1; i <= 10; i++) {
    console.log(numberForMultiplicationMable + " x " + i + " = " + (numberForMultiplicationMable * i));
}

console.log("Результат виконання за допомогою циклу while");
let a = 1;
while(a < 11){
    console.log(numberForMultiplicationMable + " x " + a + " = " + (numberForMultiplicationMable * a));
    a++;
}