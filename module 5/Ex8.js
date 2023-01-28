// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.
let map = new Map();
map.set("str", "string");
map.set(1123, "number");
map.set(true, "boolean");

map.forEach((el, i) => {
  console.log(`Ключ - ${i}, значение - ${el}.`);
});
