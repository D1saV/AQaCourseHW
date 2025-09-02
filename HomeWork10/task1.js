/**Завдання 1

1. Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
2. В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
4. Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
5. Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook 
*/

import { Book } from './Book.js';
import { EBook } from './EBook.js';


console.log("1");
const book1 = new Book("Гаррі Поттер", "Дж. К. Роулінг", 1997);
const book2 = new Book("1984", "Джордж Орвелл", 1949);
const book3 = new Book("Кобзар", "Т.Г.Шевченко", 1840);

book1.printInfo();
book2.printInfo();
book3.printInfo();


console.log("\n2");
const ebook1 = new EBook("Електронний Кобзар", "Т.Г.Шевченко", 1840, "PDF");
ebook1.printInfo();


console.log("\n3");
console.log("Current name of book:", book1.nameOfBook);
book1.nameOfBook = "Гаррі Поттер і філософський камінь";
console.log("New name of book:", book1.nameOfBook);


book1.yearOfBook = 3000; // set get test

// Ex 4
console.log("\n4");
const booksArray = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldestBook(booksArray);
console.log("The oldest book is:");
oldestBook.printInfo();

// Ex 5
console.log("\n5");
const newEbook = EBook.createFromBook(book2, "PDF");
console.log("Created EBook from paper book:");
newEbook.printInfo();