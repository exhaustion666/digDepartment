function Alert() {
    alert("Hello, World!");
}
Alert();
var sum = function (a, b, c) {
    return a + b + c;
};
// Вызов функции для проверки корректности
var result = sum(5, 10, 15);
console.log("\u0421\u0443\u043C\u043C\u0430 \u0442\u0440\u0435\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(result)); // Ожидаемый вывод: 30
var firstName = 'Nikita';
var lastName = 'Sarychev';
var middleName = 'Vyacheslavovich';
var passport = ['1234', '123456', 'ГУ МВД РОССИИ ПО Г. МОСКВА И МОСКОВСКОЙ ОБЛАСТИ', '770-030'];
var age = 19;
var allData = [firstName, lastName, middleName, passport, age];
console.log(allData);
var data = {
    id: 56,
    name: 'Райан',
    surname: "Гослинг",
};
var jsonStringify = JSON.stringify(data);
console.log(jsonStringify);
var someObject = JSON.parse(jsonStringify);
console.log(someObject);
