document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загрузилась");
    const data = [];
    const record = (param) => {
        data.push(param);
        console.log('Record: ' + param + ' added!');
        setTimeout(() => {
            const index = data.indexOf(param);
            if (index > -1) {
                data.splice(index, 1);
                console.log('Record: ' + param + ' removed!');
            }
        }, 10000);
    };
    setTimeout(() => {
        const intFunction = extFunction("qwerty");
        intFunction("12345");
    }, 5000);
    let sec = 1;
    let intervalDescriptor = setInterval(() => {
        console.log("Прошла(-о): " + sec + " секунд(-ы)(-а).");
        sec++;
    }, 1000);
    function extFunction(x) {
        console.log("Внешняя функция вводит строку: " + x);
        return (y) => console.log("Возврат результата в виде функции с замыканием на внешнюю функцию: " + (x + y));
    }
    record("Запись 1");
    record("Запись 2");
});
