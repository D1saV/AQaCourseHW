/**Завдання 4
    1.Створіть об'єкт person з такими властивостями:
        firstName: рядок, представляє ім'я особи.
        lastName: рядок, представляє прізвище особи.
        age: число, представляє вік особи.
    2.Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
    3.Видаліть властивість age з об'єкта person.
    4.Виведіть оновлений об'єкт person в консоль.
*/

const person = {
    firstName: "Poul",
    lastName: "Suares",
    age: "45"
};

person.email = "PoulSuaresMail@test.com";
delete person.age;
console.log(person);