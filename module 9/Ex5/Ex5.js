// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
// Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).

const btnNode = document.querySelector(".btn");
const page = () => document.querySelector("#page").value;
const limit = () => document.querySelector("#limit").value;
const resultNode = document.querySelector(".result");

let print = "";
print = localStorage.getItem("print");
if (print) printResult(JSON.parse(print));

const check = (a, b) => {
  if ([a, b].filter((el) => el >= 1 && el <= 10).length == 2) {
    return false;
  } else {
    if (a >= 1 && a <= 10) return "Лимит вне диапазона от 1 до 10";
    if (b >= 1 && b <= 10) return "Номер страницы вне диапазона от 1 до 10";
    return "Номер страницы и лимит вне диапазона от 1 до 10";
  }
};

function request(url) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => printResult(json))
    .catch((error) => (resultNode.innerHTML = `Упс, у нас ошибка ${error}`));
}

function printResult(apiData) {
  print = "";
  [...apiData].forEach(
    (el) =>
      (print += `
    <div class="card" style="width: 18rem;margin-top:10px">
        <img src="${el.download_url}" class="card-img-top">
        <div class="card-body">
            <p class="card-text">${el.author}</p>
        </div>
    </div>
`)
  );
  localStorage.removeItem("print");
  localStorage.setItem("print", JSON.stringify(apiData));
  resultNode.innerHTML = print;
}

btnNode.addEventListener("click", () => {
  const p = page();
  const l = limit();
  if (Boolean(check(p, l))) {
    resultNode.innerHTML = `<p style="color:white">${check(p, l)}</p>`;
  } else {
    request(`https://picsum.photos/v2/list?page=${p}&limit=${l}`);
  }
});
