/**Завдання 6: Сортування масивів

У вас є вихідний масив
сonst numbersList = [1,10,14,2,4,5,43,34]
1. Створіть новий масив на основі вихідного масиву (копіюйте його)
2. Відсортуйте створений масив (від меншого до більшого)
3. Виведіть обидва масиви в консоль */

const numbersList = [1,10,14,2,4,5,43,34];
const numbersListCopy = [...numbersList];
numbersListCopy.sort((a, b) => a - b);
console.log("Вхідний масив: " + numbersList);
console.log("Відсортований масив: " + numbersListCopy);
