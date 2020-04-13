// function getEnumKeyByEnumValue(myEnum, enumValue): string | null {
//     const keys = Object.keys(myEnum).filter(x => myEnum[x] === enumValue);
//     return keys.length > 0 ? keys[0] : null;
// }

enum CdCrm {
    AG = 0,
    GMBH,
    EINZELFIRMA
};

console.log(CdCrm.AG);
console.log(CdCrm.GMBH);
console.log(CdCrm.EINZELFIRMA);

