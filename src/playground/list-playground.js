var list = ['element-1'];
var list2 = {
    firstname: 'Hugo',
    lastname: 'Ameisenbär',
    age: 45
};
console.log(list);
console.log(list2);
var jan = {
    firstname: 'jan',
    lastname: 'wildi',
    age: 24
};
console.log(jan);
// ------------------- ------------------- -------------------
var artists = ['artist-1', 'artist-2', 'artist-3'];
// tslint:disable-next-line:prefer-for-of
for (var index = 0; index < artists.length; index++) {
    console.log(artists[index]);
}
artists.forEach(function (artist, index, artistList) {
    console.log(artist);
});
//# sourceMappingURL=list-playground.js.map