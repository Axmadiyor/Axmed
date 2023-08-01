// "use strict";

const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "")
const seriesDb = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}

const savol1 = prompt("Oxirgi ko'rgan serialingiz?",""),
savol2 = +prompt("Nechi baho berasiz?",""),
savol3 = prompt("Oxirgi ko'rgan serialingiz?",""),
savol4 = +prompt("Nechi baho berasiz?","")

seriesDb.series[savol1] = savol2;
seriesDb.series[savol3] = savol4;

console.log(seriesDb)