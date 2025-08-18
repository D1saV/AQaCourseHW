/**Якщо середня оцінка менше 60, вивести "Незадовільно".
Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно". */

let averageGrade = 71;

switch(true){
    case (averageGrade < 0 || averageGrade > 100):
        console.log("Перевірте правильність введення даних.\nДіапазон оцінок 0-100");
        break;
    case(averageGrade < 60):
        console.log("Незадовільно");
        break;
    case(averageGrade <= 70):
        console.log("Задовільно");
        break;
    case(averageGrade <= 80):
        console.log("Добре");
        break;
    case(averageGrade <= 90):
        console.log("Дуже добре");
        break;
    default:
         console.log("Відмінно");
}