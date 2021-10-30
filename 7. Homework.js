let num1 = 15;
let numString = "15";

console.log(
  num1 === numString
    ? `${num1} es estrictamente igual a "${numString}" porque un ${typeof num1} es lo mismo que un ${typeof numString}.`
    : `${num1} es estrictamente distinto a "${numString}" porque un ${typeof num1} no es lo mismo que un ${typeof numString}.`
);

//**

console.log(
  num1 == numString
    ? `El valor de ${num1} es igual al valor de "${numString}".`
    : `El valor de ${num1} es distinto al valor de "${numString}".`
);
