// "use strict";

const numberOfSeries = prompt("Nechta serial ko'rdingiz?","");
let a = prompt("Oxirgi ko'rgan serialingiz?","");
let b = +prompt("Nechi baho berasiz?","")
let c = prompt("Oxirgi ko'rgan serialingiz?","");
let d = +prompt("Nechi baho berasiz?","")
const seriesDb = {
    count: numberOfSeries,
    series: {
        
    },
    actors: {},
    genres: [],
    private: false,
}

seriesDb.series[a] = b;
seriesDb.series[c] = d;
console.log(seriesDb)