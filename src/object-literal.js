const book = {
    title : 'Book Two',
    author : 'Jane Doe',
    year : '2016',

    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book.getSummary());
console.log( Object.keys(book) ); // Returns the names of the enumerable properties and methods of an object.
console.log( Object.values(book) );
