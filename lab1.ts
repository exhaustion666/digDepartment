function Alert() {
    alert("Hello, World!");
}
Alert();

const sum = (a: number, b: number, c: number): number => {
    return a + b + c;
};

const result = sum(5, 10, 15);
console.log(`Сумма трех чисел: ${result}`);

const firstName = 'Nikita';
let lastName = 'Sarychev';
const middleName = 'Vyacheslavovich';
const passport = ['1234', '123456', 'ГУ МВД РОССИИ ПО Г. МОСКВА И МОСКОВСКОЙ ОБЛАСТИ', '770-030'];
let age = 19;
const allData = [firstName, lastName, middleName, passport, age];
console.log(allData);

const data = {
    id: 56,
    name: 'Райан',
    surname: "Гослинг",
};

const jsonStringify = JSON.stringify(data);
console.log(jsonStringify);
const someObject = JSON.parse(jsonStringify);
console.log(someObject);