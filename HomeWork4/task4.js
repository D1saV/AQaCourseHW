/*Перед оцінюванням будь ласка перегляньте README */

/*Завданя 4.1*/
let radiusOfCircle = 10;
let formulaCircleArea = Math.PI * radiusOfCircle ** 2;
 
console.log("Площа кола = "+ (formulaCircleArea).toFixed(2));

/*Завданя 4.2*/
let lengthOfRectangle = 10;
let widthOfRectangle = 5;
let resultOfRectangleArea = lengthOfRectangle*widthOfRectangle;

if(Number.isInteger(resultOfRectangleArea)){
    console.log("Площа прямокутника = "+ resultOfRectangleArea);
}else{
    console.log("Площа прямокутника = "+ (resultOfRectangleArea).toFixed(2));
}


/*Завданя 4.3*/
let radiusOfCylinder = 5;
let heightofCylinder = 15;
let resultOfCylinderArea = Math.PI * radiusOfCylinder ** 2 * heightofCylinder;

console.log("Обʼєм цилінда = "+ (resultOfCylinderArea).toFixed(2));