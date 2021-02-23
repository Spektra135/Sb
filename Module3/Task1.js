function start() {
    let customNumber = prompt("Попробуйте угадать число от 0 до 100!");

    let number = Math.floor(Math.random() * 100);
    console.log(number);

    do {
        if (customNumber === null) {
            break;
        }

        if (!parseInt(customNumber) || customNumber == '') {
            customNumber = prompt("Вы не ввели число. Введите число!")
        } else if (customNumber > number) {
            customNumber = prompt("Меньше! Попробуйте снова угадать!");
        } else if (customNumber < number) {
            customNumber = prompt("Больше! Попробуйте снова угадать!");
        }

        if (parseInt(customNumber) === parseInt(number)) {
            alert("Правильно!");
        }
    } while (customNumber != number);

alert("Конец игры");
}

