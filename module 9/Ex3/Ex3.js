// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.
const resultNode = document.querySelector(".result");
const lengthNode = document.getElementById("inputSelect");
const btnNode = document.querySelector(".btn");

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = () => {
    if (xhr.status != 200) {
      console.log("Cтатус ответа ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) callback(result, lengthNode.value);
    }
  };
  xhr.onerror = () => {
    console.log(`Ошибка! Статус ответа ${xhr.status}`);
  };

  xhr.send();
}

function printResult(apiData, check) {
  let cards = "";
  apiData.forEach((el) => {
    const cardBlock = `
    <div class="card" style="width: 18rem;">
        <img src="${el.download_url}" class="card-img-top">
        <div class="card-body">
            <p class="card-text">${el.author}</p>
        </div>
    </div>
    `;
    cards += cardBlock;
  });
  if (check <= 10) {
    resultNode.innerHTML = cards;
  } else {
    resultNode.innerHTML = `<p>Число вне диапазона от 1 до 10</p>`;
  }
}

btnNode.addEventListener("click", () => {
  useRequest(
    `https://picsum.photos/v2/list?limit=${lengthNode.value}`,
    printResult
  );
});
