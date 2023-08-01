// "use strict";

//---------------------------------------------------------

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "")
// const seriesDb = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false
// }

// const savol1 = prompt("Oxirgi ko'rgan serialingiz?",""),
// savol2 = +prompt("Nechi baho berasiz?",""),
// savol3 = prompt("Oxirgi ko'rgan serialingiz?",""),
// savol4 = +prompt("Nechi baho berasiz?","")

// seriesDb.series[savol1] = savol2;
// seriesDb.series[savol3] = savol4;

// console.log(seriesDb)

// ---------------------------------------------
// ---------------------------------------------

const age = +prompt("How old are you?","")

if (age > 25) {
    console.log("Horroe films")
} else if (age >18 && age < 25) {
    console.log("Boyevik films")
} else {
    console.log("Cartoon")
}

// ---------------------------------------------
// ---------------------------------------------

const color = prompt("Svetafor ranglaridan birini yozing","");
switch (color) {
    case "red":
        console.log("Stop")
        break;
    case "green":
        console.log("Goo")
        break;
    default:
        console.log("Probka")
}