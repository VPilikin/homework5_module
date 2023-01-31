// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

function KitchenAppliance() {
  (this.voltage = 230),
    (this.location = "Kitchen"),
    (this.getInfo = function () {
      console.log(`${this.productType} is ${this.color} color`);
    });
}

SmallKitchenAppliance.prototype = new KitchenAppliance();

function SmallKitchenAppliance(productType, color, outputPower) {
  (this.productType = productType),
    (this.color = color),
    (this.outputPower = outputPower);
}

const electricKettle = new SmallKitchenAppliance(
  "Electric Kettle",
  "White",
  2000
);
const toaster = new SmallKitchenAppliance("Toaster", "Gray", 900);

console.log(
  `Oбзая потребляемая мощность состаляет ${
    electricKettle.outputPower + toaster.outputPower
  } ватт`
);

electricKettle.getInfo();
toaster.getInfo();
console.log(electricKettle);
console.log(toaster);
