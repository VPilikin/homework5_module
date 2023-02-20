// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

const parser = new DOMParser();
const xmlList = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlList, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");

const listOfStudents = { list: [] };

studentNode.forEach((el) => {
  const name =
    el.querySelector("first").textContent +
    " " +
    el.querySelector("second").textContent;
  const age = Number(el.querySelector("age").textContent);
  const prof = el.querySelector("prof").textContent;
  const lang = el.querySelector("name").getAttribute("lang");
  const student = {
    name,
    age,
    prof,
    lang,
  };
  listOfStudents.list.push(student);
});

console.log(listOfStudents);
