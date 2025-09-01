/**
 Завдання 5
    1.Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
    2.Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
    3.Зробіть деструктуризацію в циклі
 */

    const users = [
        {brand: "BMW", model: "F10", year: "2014"},
        {brand: "Fiat", model: "500", year: "2017"},
        {brand: "Nissan", model: "Altima", year: "2020"}    
    ];

    for (const {brand, model, year} of users){
        console.log(`The car ${brand} ${model} was made at ${year}`);
    }