// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

// При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
// Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
// После получения данных вывести ниже картинку на экран.

const btnNode = document.querySelector(".btn");
const widthNode = document.querySelector("#width");
const heigthNode = document.querySelector("#heigth");
const resultNode = document.querySelector(".result");

const check = (a, b) =>
  [a, b].filter((el) => el >= 100 && el <= 300).length == 2;

btnNode.addEventListener("click", () => {
  const w = widthNode.value;
  const h = heigthNode.value;
  if (check(w, h)) {
    fetch(`https://picsum.photos/${w}/${h}`)
      .then((response) => {
        resultNode.innerHTML = `<img src="${response.url}">`;
      })
      .catch((error) => console.log(error));
  } else {
    resultNode.innerHTML = "Oдно из чисел вне диапазона от 100 до 300";
  }
});
