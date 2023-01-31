// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function isTheProp(str, obj) {
  return str in obj;
}

const myObject = {
  name: "Vitalii",
  years: 30,
  city: "KLD",
};

console.log(isTheProp("name", myObject));
