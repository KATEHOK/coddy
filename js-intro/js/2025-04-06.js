// + - * /

function calculate(sign, num1, num2) {
    let result = NaN;
    switch (sign) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (0 != num2) result = num1 / num2;
            break;
    }
    return result;
}

function calculator() {
    if (!confirm("Запустить калькулятор?")) return false;

    let num1 = Number(prompt("Введите первое число", "0"));
    let num2 = Number(prompt("Введите второе число", "0"));
    let sign = prompt("Введите действие (+, -, *, /)", "+");
    let result = calculate(sign, num1, num2);

    if (isNaN(result)) alert("Некорректный ввод!");
    else alert(`Ответ: ${result}`);
    return true;
}

let needRun = true;
while (needRun) needRun = calculator();
