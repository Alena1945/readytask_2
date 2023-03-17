// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

let lists = document.querySelectorAll('li');
lists.forEach((list) => {
  let count = list.getElementsByTagName('li').length;
  if(!count) {return};
  list.firstChild.textContent += `[${count}]`;
});