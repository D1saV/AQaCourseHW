/**
    1.Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
    2.У функції треба поділити numerator на denominator і повернути результат.
    3.Додайте валідацію в функції. У разі,
    - якщо denominator дорівнює 0
    - або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
    4.Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
    5.Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.
 */


function divide(numerator, denominator){
    if( typeof numerator !== 'number' || typeof denominator !== 'number'){
        throw new Error('Обидва аргументи повинні бути числами!');
    }
    if(denominator === 0){
        throw new Error('Значення denominator не може дорівнювати 0, ділення на нуль неможливе!');
    }
    return numerator/denominator;
}

// happyCase
try {
    console.log(divide(10,5))
} catch(error){
    console.log("Error", error.message);
} finally {
    console.log('Робота завершена');
    console.log(" ");
}

// denominator == 0
try {
    console.log(divide(10,0))
} catch(error){
    console.log("Error:", error.message);
} finally {
    console.log('Робота завершена\n');
    
}

// numerator != number
try {
    console.log(divide("число",5))
} catch(error){
    console.log("Error:", error.message);
} finally {
    console.log('Робота завершена\n');
    
}

// denominator != number
try {
    console.log(divide(10,"число"))
} catch(error){
    console.log("Error:", error.message);
} finally {
    console.log('Робота завершена\n');

}