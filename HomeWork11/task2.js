/**
 Завдання 2
В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

1.Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

<https://jsonplaceholder.typicode.com/todos/1>

    - Функція повинна повертати як результат Promise що повертає об’єкт todo
    - Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

<https://jsonplaceholder.typicode.com/users/1>
    - Функція повинна повертати як результат Promise що повертає об’єкт user
    - Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
      Присвойте значення отримані від цих виразів до змінних
 */

let url_1 = "https://jsonplaceholder.typicode.com/todos/1";
let url_2 = "https://jsonplaceholder.typicode.com/users/1";

function getTodo(){
    return fetch(url_1)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Something wrong. Error status: ${response.status}`);
        }
        return response.json();
    });
}

function getUser(){
    return fetch(url_2)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Something wrong. Error status: ${response.status}`);
        }
        return response.json();
    });
}

let promiseResultByAll = Promise.all([getTodo(), getUser()])
.then(results =>{
    console.log("Promise all result is:", results);
    return results;
})
.catch(error => {
    console.error("Error at promise all:", error);
    throw error;
});

let promiseResultByRace = Promise.race([getTodo(), getUser()])
.then(firstResults =>{
    console.log("Promise race result is:", firstResults);
    return firstResults;
})
.catch(error => {
    console.error("Error at promise race:", error);
    throw error;
});