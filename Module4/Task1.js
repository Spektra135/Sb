function getDate() {
    let actualDate = new Date ();

    return {
        year: actualDate.getFullYear(),
        months: actualDate.getMonth(),
        date: actualDate.getDate(),
        hours: actualDate.getHours(),
        minutes: actualDate.getMinutes(),
        seconds: actualDate.getSeconds(),
        days: actualDate.getDay(),
    }
}


function printMonth(months) {
    let month;

    switch (months) {
        case 0: month="января"; break;
        case 1: month="февраля"; break;
        case 2: month="марта"; break;
        case 3: month="апреля"; break;
        case 4: month="мая"; break;
        case 5: month="июня"; break;
        case 6: month="июля"; break;
        case 7: month="августа"; break;
        case 8: month="сентября"; break;
        case 9: month="октября"; break;
        case 10: month="ноября"; break;
        case 11: month="декабря"; break;
    }
    return (month);
}

function printDay(days) {
    let day;

    switch (days) {
        case 0: day='воскресенье'; break;
        case 1: day='понедельник'; break;
        case 2: day='вторник'; break;
        case 3: day='среда'; break;
        case 4: day='четверг'; break;
        case 5: day='пятница'; break;
        case 6: day='суббота'; break;
    }
    return (day);
}

function printHour(hours) {
    let hour;

    switch (hours) {
        case 1:
        case 21: hour="час"; break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23: hour="часа"; break;
        default: hour="часов"; break;
    }
    return (hour);
}


function printMinute(minutes) {
    let minute;

    if (11 <= minutes && minutes <= 19) {
        return 'минут'
    }

    switch (minutes%10) {
        case 1: minute="минута"; break;
        case 2:
        case 3:
        case 4: minute="минуты"; break;
        default: minute="минут"; break;
    }
    return (minute);
}

function printSecond(seconds) {
    let second;

    if (11 <= seconds && seconds <= 19) {
        return 'секунд'
    }

    switch (seconds%10) {
        case 1: second="секунда"; break;
        case 2:
        case 3:
        case 4: second="секунды"; break;
        default: second="секунд"; break;
    }
    return (second);
}

// Альтернативная форма записи функции, идентично можно для всех остальных функций
/*function printSecond2(seconds) {
    if (11 <= seconds && seconds <= 19) {
        return 'секунд';
    }

    switch (seconds%10) {
        case 1: return "секунда";
        case 2:
        case 3:
        case 4: return "секунды";
        default: return "секунд";
    }
}*/

// Тест для секунд, чтобы не ждать для проверки, Такой же можно для часов, минут и т.д.
/*for (let i = 0; i < 24; i++) {
    console.log(i, printSecond(i));
}*/

// вызов при помощи алерта

let now = getDate();
alert('Сегодня ' + now.date + ' ' + printMonth(now.months) + ' ' + now.year + ' года, ' + printDay(now.days) + ', ' + now.hours + ' ' + printHour(now.hours) + ' ' + now.minutes + ' ' + printMinute (now.minutes) + ' ' + now.seconds + ' ' + printSecond(now.seconds));


// Вызов консоли с ежесекундным обновлением

/*let massage = setInterval(
    function() {
    let now = getDate();

    console.log('Сегодня ' + now.date + ' ' + printMonth(now.months) + ' ' + now.year + ' года, ' + printDay(now.days) + ', ' + now.hours + ' ' + printHour(now.hours) + ' ' + now.minutes + ' ' + printMinute (now.minutes) + ' ' + now.seconds + ' ' + printSecond(now.seconds));
    ;
    },
    1000);*/

