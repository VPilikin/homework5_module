// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function printOwnProp(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }
}

const myObject = {
  a: 33,
  b: 22,
};

const myNewObject = Object.create(myObject);

myNewObject.c = true;
myNewObject.d = "false and ...";

printOwnProp(myNewObject);
