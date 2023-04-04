const fs = require('fs');
const PATH = './src';

const crew = fs.readFileSync(PATH + '/crew.txt', 'utf-8').split('\n').map((el) => el.split(', '))
const rovers = fs.readFileSync(PATH + '/equipment.txt', 'utf-8').split('\n').map((el) => el.split(', '))
const rockets = fs.readFileSync(PATH + '/rockets.txt', 'utf-8').split('\n').map((el) => el.split(', '))

//здесь только краткеи способы решения
//позволяет выбрать самого опытного капитана
function getRightCaptain() {
  let minExperience = 15
  return (crew.filter((el) => el.includes('Капитан') && el[3] > minExperience).map((el) => el.join(', '))).join(', ')
}

//позволяет выяснить кто самый неопытный бортмеханик среди мужчин
function dectectInexperiencedEngineer() {
  return crew.filter((el) => el.includes('Бортмеханик')).sort((a, b) => +a[3] - +b[3])[0].join(', ')
}

//позволяет выбрать всех врачей и узнать их стаж по его убыванию
function getAllDoctors() {
  return crew.filter((el) => el.includes('Врач')).sort((a, b) => +b[3] - +a[3]).map((el) => el.join(', '))
}

//позволяет отобрать все луноходы
function getAllMoonRovers() {
  return rovers.filter((el) => el.includes('луноход')).map((el) => el.join(', '))
}

//позволяет узнать луноход с минимальным сроком службы
function detectedMoonRover() {
  return rovers.filter((el) => el.includes('луноход')).sort((a, b) => +a[3] - +b[3])[0].join(', ')
}

//позволяет выбрать луноходы со сроком службы больше 6 лет
function getRightMoonRover() {
  const expluataionTime = 6
  return rovers.filter((el) => el.includes('луноход') && el[2] > expluataionTime).map((el) => el.join(', '))
}

//позволяет срок службы лунохода с самым большим сроком службы
function detectedRightMoonRover() {
  return +rovers.filter((el) => el.includes('луноход')).sort((a, b) => +b[3] - +a[3])[0][2]
}

//позволяет выбрать ракету с максимальной дальностью полёта
function getRightRockets() {
  return rockets.filter((el) => el.includes('межзвездная')).map((el) => el.join(', '))
}

function detectRocket() {
  return rockets.filter((el) => el.includes('межзвездная')).sort((a, b) => +a - +b)[0].join(', ')
}

module.exports = {
  getRightCaptain,
  getAllDoctors,
  dectectInexperiencedEngineer,
  getAllMoonRovers,
  getRightMoonRover,
  detectedMoonRover,
  detectedRightMoonRover,
  getRightRockets,
  detectRocket
};
