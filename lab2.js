const Average = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return numbers.length > 0 ? sum / numbers.length : 0;
};
const average = Average([10, 20, 30, 40, 50]);
console.log(`Среднее арифметическое: ${average}`);
const Count = (matrix, min, max) => {
    let count = 0;
    for (const row of matrix) {
        for (const value of row) {
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
};
const count = Count([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], 3, 7);
console.log(`Количество значений в интервале: ${count}`);
const Tuple = ["Ryan", "Gosling", 42];
const showTuple = (tuple) => {
    return tuple[0] + ' ' + tuple[1] + ' ' + tuple[2];
};
console.log(showTuple(Tuple));
var OilType;
(function (OilType) {
    OilType["Canola"] = "\u0420\u0430\u043F\u0441\u043E\u0432\u043E\u0435";
    OilType["Sunflower"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435";
    OilType["Olive"] = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435";
})(OilType || (OilType = {}));
console.log(`Тип масла: ${OilType.Canola}`);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const somePet = new Pet();
console.log(somePet.speak());
const someCat = new Cat();
console.log(someCat.speak());
const someDog = new Dog();
console.log(someDog.speak());
;
const oilProduct = {
    type: OilType.Sunflower,
    liter: 5,
    price: 100
};
const jsonObject = JSON.stringify(oilProduct);
console.log(jsonObject);
const objParsed = JSON.parse(jsonObject);
let partObject = objParsed.type;
console.log(objParsed);
