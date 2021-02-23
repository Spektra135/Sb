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

// Развёрнутый код
/*let logged = [];
for (let i = 0; i < users.length; i++) {
    const filtered = (function (user) {
        return customAnswer.login === user.login && customAnswer.password === user.password;
    })(users[i]);
    if (filtered) {
        logged.push(users[i]);
    }
}*/

/*function array_filter(list, filterCallback) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (filterCallback(list[i])) {
            result.push(list[i]);
        }
    }
    return result;
}

let logged = array_filter(users, function (user) {
    return customAnswer.login === user.login && customAnswer.password === user.password
});*/

// Тоже самое - коротко
const logged = users.filter(function (user) {
     return customAnswer.login === user.login && customAnswer.password === user.password
});



if (logged.length === 1) {
    alert('Привет, ' + logged[0].name);
} else {
    alert('Такого пользователя нет :( ');
}



