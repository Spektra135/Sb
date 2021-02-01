let firstNumber = prompt("Введите число");
let secondNumber = prompt("Ввведите ещё одно число");

if (!parseInt(firstNumber) || !parseInt(secondNumber)) {
    alert('Вы не ввели число')
} else if (firstNumber > secondNumber) {
    alert('Первое число больше второго')
} else if (secondNumber > firstNumber) {
    alert('Второе число больше первого')
} else if (firstNumber === secondNumber) {
    alert('Числа равны')
}