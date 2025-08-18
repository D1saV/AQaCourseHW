/**Якщо середня оцінка менше 60, вивести "Незадовільно".
Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно". */

let averageGrade = -2;

if(averageGrade < 0 || averageGrade > 100){
     console.log("Перевірте правильність введення даних.\nДіапазон оцінок 0-100");
}
else{

    if(averageGrade < 60){
        console.log("Незадовільно");
    }
        else if(averageGrade >= 60 && averageGrade<=70){
            console.log("Задовільно");
        }
        else if(averageGrade > 70 && averageGrade <= 80){
            console.log("Добре");
        }
        else if(averageGrade > 80 && averageGrade <= 90){
            console.log("Дуже добре");
        }
    else{
        console.log("Відмінно"); 
    }
}