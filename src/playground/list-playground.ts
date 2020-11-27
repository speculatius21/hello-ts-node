let list = ['element-1'];
let list2= {
    firstname: 'Hugo',
    lastname: 'Ameisenbär',
    age: 45
};

console.log(list);
console.log(list2);
// ------------------- ------------------- -------------------

interface HumanBeing {
    firstname: string;
    lastname: string;
    age: number;
}

const jan:HumanBeing = {
    firstname: 'jan',
    lastname: 'wildi',
    age: 24
};

console.log(jan);
// ------------------- ------------------- -------------------
const artists = ['artist-1', 'artist-2', 'artist-3'];

// tslint:disable-next-line:prefer-for-of
for(let index=0; index < artists.length; index++) {
    console.log(artists[index]);
}

artists.forEach((artist, index, artistList) => {
    console.log(artist);
});
