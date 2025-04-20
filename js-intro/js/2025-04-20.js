/*
1. Написать функции вычисления квадрата и куба числа:
square(base) и cube(base) - соответственно
*/

function square(base) {
    return base * base;
}
function cube(base) {
    return square(base) * base;
}

/*
2. Написать функцию поиска объема
прямоугольного параллелепипеда
rectangular_parallelepiped_volume(length, width, height):
    - length - длина
    - width - ширина
    - height - высота
*/

function rectangular_parallelepiped_volume(length, width, height) {
    return length * width * height;
}

/*
3. Написать функцию вычисления степени числа
    pow(base, exp):
- base - основание степени
- exp - показатель степени (сколько раз умножить базу)
*/

function pow(base, exp) {
    if (exp == 0 && base == 0 || exp < 0) return undefined;
    let result = 1;
    for (let cur_exp = 1; cur_exp <= exp; ++cur_exp)
        result *= base;
    return result;
}

// * рекурсивный варик
function pow_rec(base, exp) {
    if (exp == 0 && base == 0 || exp < 0) return undefined;
    if (exp == 0) return 1;
    if (base == 0 || base == 1) return base;
    return base * pow_rec(base, exp - 1);
}

// (рекурсивно) факториал числа
function factor(n) {
    if (n < 0) return;
    if (n == 0) return 1;
    return n * factor(n - 1);
}


