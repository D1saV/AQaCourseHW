import { Book } from './Book.js';


export class EBook extends Book {
    constructor(nameOfBook, authorOfBook, yearOfBook, fileFormat){
        super(nameOfBook, authorOfBook, yearOfBook);
        this.fileFormat = fileFormat;
     }

     get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFormat){
        const validFormats = ["PDF", "DOC", "DOCX", "DjVU"];
        if(validFormats.includes(newFormat.toUpperCase())) {
            this._fileFormat = newFormat.toUpperCase();
        } else {
            console.log(`Format would be one of the : ${validFormats.join(', ')}`);
        }
    }


    printInfo(){
        console.log(`Name of book is ${this.nameOfBook}, the author of book is ${this.authorOfBook}, the year of made is ${this.yearOfBook}, the format is ${this.fileFormat}`);
    }

    static createFromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error("First argument must be an instance of Book");
        }
        
        return new EBook(book.nameOfBook, book.authorOfBook, book.yearOfBook, fileFormat);
    }

}
