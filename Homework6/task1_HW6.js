/** 
    Створіть функцію яка приймає два параметри: width і height.
    Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
    Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
    Реалізуйте функцію трьома способами (function declaration, function expression, arrow function) 
*/

// function declaration
function square(width,height){
    return width*height;
}

console.log(square(5,10));

//function expression

let square = function(width,height){
    return width*height;
}
console.log(square(5,10));

// function arrow
let square = (width,height) =>{
    return width*height;
}
console.log(square(5,10));
