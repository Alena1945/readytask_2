// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

const items = document.querySelectorAll('li');

items.forEach(item => {
  item = `${item.firstChild.data.trim()}: ${item.querySelectorAll('li').length}`;

  console.log(item);
});