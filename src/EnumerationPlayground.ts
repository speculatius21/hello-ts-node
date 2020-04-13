// function getEnumKeyByEnumValue(myEnum, enumValue): string | null {
//     const keys = Object.keys(myEnum).filter(x => myEnum[x] === enumValue);
//     return keys.length > 0 ? keys[0] : null;
// }

enum Fruit { Orange, Apple, Grape };

console.log(Fruit.Orange);
console.log(Fruit.Apple);
console.log(Fruit.Grape);

