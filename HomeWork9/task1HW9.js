/**Завдання 1
1.Створіть порожній об'єкт з ім'ям student.
2.Додайте до об'єкта student наступні властивості:
    -firstName: рядок, представляє ім'я студента.
    -lastName: рядок, представляє прізвище студента.
    -age: число, представляє вік студента.
    -courses: масив, представляє список курсів, які він вивчає (наприклад, ["Математика", "Історія", "Програмування"]).
3.Виведіть об'єкт student в консоль. */

const student = {};

    student.firstName = "Ivan";
    student.lastName = "Ivanenko";
    student.age = 25;
    student.courses = ["Automation QA js/ts", "QA technical pro", "ISTQB learning"];

    console.log(student);