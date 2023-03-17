// Исходный документ выглядит так:

 
// Каковы координаты центра поля?

// Вычислите их и используйте, чтобы поместить мяч в центр поля:


// Элемент должен позиционироваться за счёт JavaScript, а не CSS.
// Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
// P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка».

function moveBallOnCenter(){

    let field = document.getElementById('field');
    let ball = document.getElementById('ball');
  
    let width = field.clientWidth;
    let heigth = field.clientHeight;
    let ballWidth = ball.clientWidth / 2;
    let ballHeight = ball.clientHeight / 2;
  
    ball.style.top = heigth / 2 - ballHeight + 'px';
    ball.style.left = width / 2 - ballWidth + 'px';
  
  }
  
  moveBallOnCenter();  