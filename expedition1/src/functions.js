const fs = require('fs');
const PATH = './src';

const crew = fs.readFileSync(PATH + '/crew.txt', 'utf-8').split('\n').map((el) => el.split(', '))

//позволяет выбрать самого опытного капитана
function getRightCaptain() {
  let experience = []

  for (let i = 1; i < crew.length; i++) {
    if (crew[i].includes('Капитан')) {
      experience.push(crew[i].filter((el) => Number(el)).join(', '))
    }
  }

  experience.sort((a, b) => b - a)

  let mostExperiencedCrew = crew.find((el) => el.includes(experience[0])).join(', ')
  return mostExperiencedCrew
}
console.log(getRightCaptain(crew));

//позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
  let experience = []

  for (let i = 1; i < crew.length; i++) {
    if (crew[i].includes('ж') && crew[i].includes('Врач')) {
      experience.push(crew[i].filter((el) => Number(el)).join(', '))
    }
  }

  experience.sort((a, b) => b - a)

  let mostExperiencedWomanCrew = crew.find((el) => el.includes(experience[0])).join(', ')
  return mostExperiencedWomanCrew
}

// console.log(getRightDoc(crew));

//позволяет выбрать всех бортмехаников
function getAllEngineer() {
  let mechanicsAll = []

  for (let i = 1; i < crew.length; i++) {
    if (crew[i].includes('Бортмеханик')) {
      mechanicsAll.push(crew[i].join(', '))
    }
  }

  return mechanicsAll
}
// console.log(getAllEngineer(crew));

//Позволяет отобрать все марсоходы
function getAllRover() {

}

//позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers() {

}

//позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {

}


module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket
};
