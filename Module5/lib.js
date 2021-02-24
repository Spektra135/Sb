function getStart() {
    return function () {
        let attempts = 1;
        let number = Math.floor(Math.random() * 1000) + 1;
        console.log(number);
        let customNumber = prompt("Попробуйте угадать число от 1 до 1000!");

        do {
            if (customNumber === null) {
                break;
            }

            if (!(customNumber != '' && (customNumber == '0' || Number(customNumber))) ) {
                customNumber = prompt("Вы не ввели число. Введите число!")
            } else if (customNumber > number) {
                customNumber = prompt("Меньше! Попробуйте снова угадать!");
            } else if (customNumber < number) {
                customNumber = prompt("Больше! Попробуйте снова угадать!");
            }

            if (parseInt(customNumber) === parseInt(number)) {
                alert("Правильно!");
            }
            attempts++;
            console.log(attempts,customNumber);
            if (attempts >= 10) {
                break;
            }
        } while (customNumber != number);
        alert("Конец игры");
    }
}