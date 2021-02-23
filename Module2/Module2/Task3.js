function sumInput() {

    let numbers = [];

    while (true) {

        let number = prompt("Введите число", 0);

        if ( number === null) break;

        if (isFinite(number)) {
            numbers.push(+number);
        }
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput());

/*
function sumInput() {

    let numbers = [];

    while (true) {

        let number = prompt("Введите число", 0);

        if (number === null) break;

        if (number.trim().match(/^\d+$/)) {
            numbers.push(+number);
        }
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput())*/
