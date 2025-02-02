const fs = require('fs');
const PATH = './src';

const crew = fs.readFileSync(PATH + '/crew.txt', 'utf-8').split('\n').map((el) => el.split(', '))
const rovers = fs.readFileSync(PATH + '/equipment.txt', 'utf-8').split('\n').map((el) => el.split(', '))
const rockets = fs.readFileSync(PATH + '/rockets.txt', 'utf-8').split('\n').map((el) => el.split(', '))

//позволяет выбрать самого опытного капитана
function getRightCaptain() {
  let mostExperiencedCrew = crew.filter((el) => el.includes('Капитан')).sort((a, b) => +b[3] - +a[3])
  return mostExperiencedCrew[0].join(', ')

  //цикл
  // let exp = 0
  // let iExp = 1

  // for (let i = 1; i < crew.length; i++) {
  //   if (crew[i].includes('Капитан')) {
  //     if (+crew[i][3] > exp) {
  //       exp = +crew[i][3]
  //       iExp = i
  //     }
  //   }
  // }
  // return crew[iExp].join(', ')
  //мой изначальный код (оставлю на память в этой функции, решение громоздкое, но чуть более универслаьное)
  // let experience = []
  // for (let i = 1; i < crew.length; i++) {
  //   if (crew[i].includes('Капитан')) {
  //     experience.push(crew[i].filter((el) => el.includes(Number(el))))
  //   }
  // }

  // let sortexperience = experience.sort((a, b) => b - a)
  // let sortexperienceExperience = sortexperience.flat()

  // let mostExperiencedCrew = crew.find((el) => el.includes(sortexperienceExperience[0])).join(', ')
  // return mostExperiencedCrew
}

//позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
  let mostExperiencedCrew = crew.filter((el) => el.includes('ж') && el.includes('Врач')).sort((a, b) => +b[3] - +a[3])
  return mostExperiencedCrew[0].join(', ')

  //цикл
  // let exp = 0
  // let iExp = 1

  // for (let i = 1; i < crew.length; i++) {
  //   if (crew[i].includes('ж') && crew[i].includes('Врач')) {
  //     if (+crew[i][3] > exp) {
  //       exp = +crew[i][3]
  //       iExp = i
  //     }
  //   }
  // }
  // return crew[iExp].join(', ')
}

//позволяет выбрать всех бортмехаников
function getAllEngineer() {
  return crew.filter((el) => el.includes('Бортмеханик')).map((el) => el.join(', '))

  // цикл
  // let engineerAll = []

  // for (let i = 1; i < crew.length; i++) {
  //   if (crew[i].includes('Бортмеханик')) {
  //     engineerAll.push(crew[i].join(', '))
  //   }
  // }
  // return engineerAll
}

//Позволяет отобрать все марсоходы
function getAllRover() {
  return rovers.filter((el) => el.includes('марсоход')).map((el) => el.join(', '))

  //цикл
  // let roverAll = []

  // for (let i = 1; i < rovers.length; i++) {
  //   if (rovers[i].includes('марсоход')) {
  //     roverAll.push(rovers[i].join(', '))
  //   }
  // }
  // return roverAll
}

//позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers() {
  const expluataionTime = 3
  return rovers.filter((el) => el.includes('марсоход') && el[2] > expluataionTime).map((el) => el.join(', '))

  //цикл
  // let roversOlder3Years = []
  // const expluataionTime = 3

  // for (let i = 1; i < rovers.length; i++) {
  //   if (rovers[i].includes('марсоход')) {
  //     if (+rovers[i][2] > expluataionTime) {
  //       roversOlder3Years.push(rovers[i].join(', '))
  //     }
  //   }
  // }
  // return roversOlder3Years
}


//позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {
  return rockets.sort((a, b) => +b[2] - +a[2])[1].join(', ')

  //цикл
  // let max = 0
  // let rocketMax = 1

  // for (let i = 1; i < rockets.length; i++) {
  //   if (+rockets[i][2] > max) {
  //     max = +rockets[i][2]
  //     rocketMax = i
  //   }
  // }
  // return rockets[rocketMax].join(', ')
}

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket
};
