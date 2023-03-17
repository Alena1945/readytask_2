// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

let table = document.body.firstElementChild.firstElementChild;
diagonal(table);

function diagonal(table) {
  function colorize(elem, color) {
    elem.style.background = color;
  }

  for (let i = 0; i < table.children.length; i++) {
    colorize(table.children[i].children[i], "red")
  }
}