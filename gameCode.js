//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

//номер вопроса
//вопрос
//ответ
var event, ok;

var answers = [
    [],
    [],
    []
];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
answers[0][0] = 1;
answers[0][1] = works.a00;
if (event == 1) {
    answers[0][2] = works.a1;
} else {
    answers[0][2] = works.a2;
}

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');

            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        answers[1][0] = 2;
        answers[1][1] = works.b00;
        if (event == 1) {
            answers[1][2] = works.b1;
        } else {
            answers[1][2] = works.b2;
        }
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                answers[2][0] = 3;
                answers[2][1] = works.d00;
                if (event == 1) {
                    answers[2][2] = works.d1;
                } else {
                    answers[2][2] = works.d2;
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        answers[1][0] = 2;
        answers[1][1] = works.c00;
        if (event == 1) {
            answers[1][2] = works.c1;
        } else {
            answers[1][2] = works.c2;
        }
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                answers[2][0] = 3;
                answers[2][1] = works.d00;
                if (event == 1) {
                    answers[2][2] = works.d1;
                } else {
                    answers[2][2] = works.d2;
                }
                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                answers[2][0] = 3;
                answers[2][1] = works.d00;
                if (event == 1) {
                    answers[2][2] = works.d1;
                } else {
                    answers[2][2] = works.d2;
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;

    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

// var j = 0;
// while (j <= 2) {
//     for (var i = 0; i < answers.length; i++) {
//         console.log(answers[j][i]);
//     }
//     j++;
// }
var qNum;
while (true) {
    qNum = +prompt("Введите номер вопроса");
    if (qNum < 1 || qNum > 3) {
        alert("Такого вопроса не было");
    } else {
        break;
    }
}
alert(Response(qNum));


alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
function Response(num) {
    alert("Вопрос: " + answers[num - 1][1] + "\n" + "Ваш ответ: " + answers[num - 1][2]);
}


