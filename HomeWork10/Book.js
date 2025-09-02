export class Book {
    constructor(nameOfBook, authorOfBook, yearOfBook){
       this._nameOfBook = nameOfBook;
       this._authorOfBook = authorOfBook;
       this._yearOfBook = yearOfBook;
    }

    get nameOfBook() {
        return this._nameOfBook;
    }

    set nameOfBook(newName){
         if (typeof newName === 'string' && newName.length > 0) {
            this._nameOfBook = newName;
        } else {
            console.log("Error! Name of book is empty! Please set the name before start the code");
        }
    }

    get authorOfBook(){
        return this._authorOfBook;
    }

    set authorOfBook(newAuthor){
         if (typeof newAuthor === 'string' && newAuthor.length > 0) {
            this._authorOfBook = newAuthor;
        } else {
            console.log("Error! Author of book is empty! Please set the name of author before start the code");
        }
    }

    get yearOfBook(){
        return this._yearOfBook;
    }

    set yearOfBook(newYear){
         if (typeof newYear === 'string' && newYear.length > 0) {
            this._yearOfBook = newYear;
        } else {
            console.log("Error! Year of book is empty! Please set the year before start the code");
        }
    }

    printInfo(){
        console.log(`Name of book is ${this.nameOfBook}, the author of book is ${this.authorOfBook}, the year of made is ${this.yearOfBook}`);
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            return null;
        }

        return books.reduce((oldest, current) => {
            return current.yearOfBook < oldest.yearOfBook ? current : oldest;
        });
    }
}

