// Имеется <select>:

// <select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>
// Используя JavaScript:

// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

console.log(
    `value: ${genres.value}, text: ${genres.options[genres.selectedIndex].text}`
);

genres.insertAdjacentHTML(
    "beforeend",
    `<option value="classic">Classic</option>`
);

genres.value = "classic";