// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

// 1
// let table = document.getElementById('age-table')

// 2
// table.getElementsByTagName('label')

// 3
// table.rows[0].cells[0]

// 4
// let form = document.getElementsByName('search')[0]

// 5 
// formdocument.getElementsByTagName('input')[0]

// 6
// let inputs = form.querySelectorAll('input')
// inputs[inputs.length-1] 