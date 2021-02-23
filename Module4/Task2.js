let users = [
    {name: 'Вася', password: 'Vasya123', login: 'Vasya'},
    {name: 'Петя', password: 'Petya123', login: 'Petya'},
    {name: 'Дима', password: 'Dima123', login: 'Dima'},
    {name: 'Аня', password: 'Anna123', login: 'Anna'},
    {name: 'Таня', password: 'Tanya123', login: 'Tanya'}
];

let customAnswer = {
    login: prompt('Введите свой логин'),
    password: prompt('Введите пароль ')
};

if (customAnswer.login === '' || customAnswer.password === '') {
    alert("Вы не ввели логин или пароль");
}

for (let i = 0; i < users.length; i++) {
    if (customAnswer.login === users[i].login && customAnswer.password === users[i].password) {
        alert('Привет, ' + users[i].name);
        break;
    } else if (i === users.length - 1) {
        alert('Такого пользователя нет :( ');
    }
}

