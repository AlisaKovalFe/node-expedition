const {
    getRightMoonRover,
    getAllMoonRovers,
    detectedMoonRover,
    detectedRightMoonRover,
    dectectInexperiencedEngineer,
    getRightCaptain,
    getAllDoctors,
    getRightRockets,
    detectRocket
} = require('../src/functions');

describe('Экспедиция на Марс', () => {
    describe('Отбор кандидатов', () => {
        let crew;
        beforeEach(() => {
            crew = [
                'Роберт Стивенсон, м, Капитан, 12',
                'Кэтерин Лоу, ж, Врач, 9',
                'Уильям Блейк, м, Бортмеханик, 11',
                'Стив Джонсон, м, Капитан, 23',
                'Клара Томпсон, ж, Врач, 10',
                'Том Браун, м, Врач, 14',
                'Джуди Лестер, ж, Бортмеханик, 16',
            ];
        });
        it('позволяет выбрать Капитана со стажем больше 15 лет', () => {
            const bestCaptain = getRightCaptain();
            expect(bestCaptain).toBe(crew[3]);
            expect(bestCaptain).not.toBe(crew[0]);
            expect(bestCaptain).toBeDefined();
        });
        it('позволяет узнать кто самый неопытный бортмеханик среди мужчин', () => {
            const inexperiencedEngineer = dectectInexperiencedEngineer();
            expect(inexperiencedEngineer).toEqual(crew[2]);
        });
        it('позволяет выбрать всех врачей и узнать их стаж по его убыванию', () => {
            const allDoctors = getAllDoctors();
            expect(allDoctors).toEqual([crew[5], crew[4], crew[1]]);
            expect(allDoctors).toContain(crew[4]);
            expect(allDoctors).toHaveLength(3);
        });
    });
    describe('Отбор оборудования', () => {
        let equipment;
        beforeEach(() => {
            equipment = [
                'Исследователь-2, марсоход, 3',
                'Рейнджер‑4, луноход, 5',
                'Покоритель-3, луноход, 7',
                'Искатель-1, марсоход, 5',
                'Путник-3, марсоход, 8',
            ];
        });
        it('позволяет отобрать все луноходы', () => {
            const allMoonRovers = getAllMoonRovers();
            expect(allMoonRovers).toEqual([equipment[1], equipment[2]]);
            expect(allMoonRovers).not.toBeFalsy();
        });
        it('позволяет узнать луноход с минимальным сроком службы', () => {
            const detectMoonRover = detectedMoonRover();
            expect(detectMoonRover).toEqual(equipment[1]);
        });
        it('позволяет выбрать луноходы со сроком службы больше 6 лет', () => {
            const rightMoonRover = getRightMoonRover();
            expect(rightMoonRover).toEqual([equipment[2]]);
        });
        it('позволяет срок службы лунохода с самым большим сроком службы', () => {
            const detectServiceLife = detectedRightMoonRover();
            expect(detectServiceLife).toEqual(5);
            expect(detectServiceLife).toBeLessThan(7);
        });
    });
    describe('Выбор ракеты', () => {
        let rockets;
        beforeEach(() => {
            rockets = [
                'Атлантис, орбитальная, 30',
                'Колумбия, межзвездная, 1209',
                'SpaceX, межзвездная, 209456',
            ];
        });
        it('позволяет выбрать все межзвездные ракеты', () => {
            const rocketsRight = getRightRockets();
            expect(rocketsRight).toEqual([rockets[1], rockets[2]]);
        });
        it('позволяет выбрать межзвездную ракеты с минимальной дальностью полёта', () => {
            const detectedRocket = detectRocket();
            const typeofDetectedRocket = typeof detectRocket()
            expect(detectedRocket).toBe(rockets[1]);
            expect(typeofDetectedRocket).toBe('string')
        });
    });
});
