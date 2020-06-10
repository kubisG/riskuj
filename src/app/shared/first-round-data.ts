const questions1 = [
    { id: 1, value: 1000, text: 'text1', categoryId: 1, answered: false, correct: false },
    { id: 2, value: 2000, text: 'text2', categoryId: 1, answered: false, correct: false },
    { id: 3, value: 3000, text: 'text3', categoryId: 1, answered: false, correct: false },
    { id: 4, value: 4000, text: 'text4', categoryId: 1, answered: false, correct: false },
    { id: 5, value: 5000, text: 'text5', categoryId: 1, answered: false, correct: false },
];
const questions2 = [
    { id: 6, value: 1000, text: 'text3', categoryId: 2, answered: false, correct: false },
    { id: 7, value: 2000, text: 'text2', categoryId: 2, answered: false, correct: false },
    { id: 8, value: 3000, text: 'text3', categoryId: 2, answered: false, correct: false },
    { id: 9, value: 4000, text: 'text4', categoryId: 2, answered: false, correct: false },
    { id: 10, value: 5000, text: 'text5', categoryId: 2, answered: false, correct: false },
];
const questions3 = [
    { id: 11, value: 1000, text: 'text5', categoryId: 3, answered: false, correct: false },
    { id: 12, value: 2000, text: 'text2', categoryId: 3, answered: false, correct: false },
    { id: 13, value: 3000, text: 'text3', categoryId: 3, answered: false, correct: false },
    { id: 14, value: 4000, text: 'text4', categoryId: 3, answered: false, correct: false },
    { id: 15, value: 5000, text: 'text5', categoryId: 3, answered: false, correct: false },
];

const questions4 = [
    { id: 16, value: 1000, text: 'text5', categoryId: 4, answered: false, correct: false },
    { id: 17, value: 2000, text: 'text2', categoryId: 4, answered: false, correct: false },
    { id: 18, value: 3000, text: 'text3', categoryId: 4, answered: false, correct: false },
    { id: 19, value: 4000, text: 'text4', categoryId: 4, answered: false, correct: false },
    { id: 20, value: 5000, text: 'text5', categoryId: 4, answered: false, correct: false },
];

const questions5 = [
    { id: 21, value: 1000, text: 'text5', categoryId: 5, answered: false, correct: false },
    { id: 22, value: 2000, text: 'text2', categoryId: 5, answered: false, correct: false },
    { id: 23, value: 3000, text: 'text3', categoryId: 5, answered: false, correct: false },
    { id: 24, value: 4000, text: 'text4', categoryId: 5, answered: false, correct: false },
    { id: 25, value: 5000, text: 'text5', categoryId: 5, answered: false, correct: false },
];

const questions6 = [
    { id: 26, value: 1000, text: 'text5', categoryId: 6, answered: false, correct: false },
    { id: 27, value: 2000, text: 'text2', categoryId: 6, answered: false, correct: false },
    { id: 28, value: 3000, text: 'text3', categoryId: 6, answered: false, correct: false },
    { id: 29, value: 4000, text: 'text4', categoryId: 6, answered: false, correct: false },
    { id: 30, value: 5000, text: 'text5', categoryId: 6, answered: false, correct: false },
];


export const categories = [
    { id: 1, name: 'Letem světem', questions: questions1, answered: false, correct: false, locked: true, text: 'text1' },
    { id: 2, name: 'Co na to Pavel', questions: questions2, answered: false, correct: false, locked: true, text: 'text2' },
    { id: 3, name: 'Ve světle ramp', questions: questions3, answered: false, correct: false, locked: true, text: 'text3' },
    { id: 4, name: 'Od rána do večera', questions: questions4, answered: false, correct: false, locked: true, text: 'text4' },
    { id: 5, name: 'Na co se koukáš', questions: questions5, answered: false, correct: false, locked: true, text: 'text5' },
    { id: 6, name: 'Na rodné hroudě', questions: questions6, answered: false, correct: false, locked: true, text: 'text6' },
];
