let a = +prompt("Input a");
let b = +prompt("Input b");
let x;

try {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Данные не являються числовыми значениями");
    }
    if (a == 0) {
        throw new Error("Число а не может равняться нулю");
    }
    res = x = - b / a;
    alert("Результат равен: " +  res);
}
catch (ex) {
    alert( "Извините, в данных ошибка: " + ex.message);
}

finally {
    alert("До свидания!");
}