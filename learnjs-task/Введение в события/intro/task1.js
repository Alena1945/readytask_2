// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

let butt = document.getElementById('hider');
let text = document.getElementById('text');
butt.addEventListener('click',() => {
    text.style.display = 'none';
})