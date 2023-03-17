// Вот таблица:

//  <table>
// <thead>
//   <tr>
//     <th>Name</th><th>Surname</th><th>Age</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>John</td><td>Smith</td><td>10</td>
//   </tr>
//   <tr>
//     <td>Pete</td><td>Brown</td><td>15</td>
//   </tr>
//   <tr>
//     <td>Ann</td><td>Lee</td><td>5</td>
//   </tr>
//   <tr>
//     <td>...</td><td>...</td><td>...</td>
//   </tr>
// </tbody>
// </table>
// В ней может быть больше строк.

// Напишите код для сортировки по столбцу "name".

const table = document.getElementById('table');
const firstTr = table.querySelector('tr:first-child');
const tr = table.querySelectorAll('tr:not(:first-child)');

const arr = Array.from(tr).sort((a, b) => {
    return a.firstElementChild.textContent > b.firstElementChild.textContent ? 1 : -1;
});

table.tBodies[0].append(firstTr, ...arr);