interface StringArray {
    [index: number]: string;
}
const authorList: StringArray = { 1: 'author-name-1', 2: 'author-name-2', 3: 'author-name-3' };
const authorList2: StringArray = ['author-name-1', 'author-name-2', 'author-name-2'];

// tslint:disable-next-line:no-console
console.log(authorList);
console.log(authorList2);


