const Average = (numbers: number[]): number => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return numbers.length > 0 ? sum / numbers.length : 0;
};

const average = Average([10, 20, 30, 40, 50]);
console.log(`Среднее арифметическое: ${average}`); 

const Count = (matrix: number[][], min: number, max: number): number => {
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
    [7, 8, 9]], 3, 7);
console.log(`Количество значений в интервале: ${count}`);

const Tuple : [string, string, number] = ["Ryan", "Gosling", 42];

const showTuple = (tuple: [string, string, number]) => {
    return tuple[0] + ' ' + tuple[1] + ' ' + tuple[2];
}

console.log(showTuple(Tuple));


enum OilType {
    Canola = "Рапсовое",
    Sunflower = "Подсолнечное",
    Olive = "Оливковое"
}

console.log(`Тип масла: ${OilType.Canola}`);

class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

const somePet: Pet = new Pet();
console.log(somePet.speak());

const someCat: Pet = new Cat();
console.log(someCat.speak());

const someDog: Pet = new Dog();
console.log(someDog.speak());

interface Oil {
    type: OilType;
    liter: number;
    price: number;
};

const oilProduct: Oil = {
    type: OilType.Sunflower,
    liter: 5,
    price: 100
};

const jsonObject = JSON.stringify(oilProduct);
console.log(jsonObject);

const objParsed: Oil  = JSON.parse(jsonObject) as Oil;

let partObject: OilType = objParsed.type;

console.log(objParsed);