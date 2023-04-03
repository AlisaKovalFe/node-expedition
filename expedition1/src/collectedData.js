const fs = require('fs');

const PATH = './src/data';

const crew = fs.readFileSync(PATH + '/crew.txt', 'utf-8').split('\n');


let newCrew = [];
for (let i = 0; i < crew.length; i++) {
    newCrew.push(crew[i].split(', '))
};



console.log(newCrew);


// let newCrew = [];
// let result = {};

// for (let i = 0; i < crew.length; i++) {
//     newCrew.push(crew[i].split(', '))
// };

// [fullName, gender, position, experience] = newCrew[0];

// let finalArr = [];

// const transform = (newCrew) => {
//     for (let i = 1; i < newCrew.length; i++) {
//         result[fullName] = newCrew[i][0]
//         result[gender] = newCrew[i][1]
//         result[position] = newCrew[i][2]
//         result[experience] = newCrew[i][3]
//         finalArr.push({ ...result })
//     }

//     return finalArr
// }

// let res = transform(newCrew)

// const equipment = fs.readFileSync(PATH + '/equipment.txt', 'utf-8');

// const rockets = fs.readFileSync(PATH + '/rockets.txt', 'utf-8');

module.exports = newCrew