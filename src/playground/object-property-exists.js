var myObject = {
    myProperty: 4711
};
if ('myProperty' in myObject) {
    console.log('object property "myProperty" exists');
}
if ('non-existing-property' in myObject) {
    console.log('object property "non-existing-property" exists');
}
if ('constructor' in myObject) {
    console.log('object property "constructor" exists');
}
//# sourceMappingURL=object-property-exists.js.map