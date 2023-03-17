// Создать меню, которое по нажатию открывается либо закрывается.


// P.S. HTML/CSS исходного документа можно и нужно менять.

field.addEventListener('click', (event) => {
    let moveY = event.clientY - field.clientTop - field.offsetTop - ball.offsetHeight / 2;
    let moveX = event.clientX - field.clientLeft - field.offsetLeft - ball.offsetWidth / 2;
    let rightLimit = field.clientWidth - ball.offsetWidth;
    let bottomLimit = field.clientHeight - ball.offsetHeight;
    if(moveY < 0) {
      moveY = 0;
    }
    if(moveX < 0) {
      moveX = 0;
    } 
    if(moveX > rightLimit) {
      moveX = rightLimit;
    }
    if(moveY > bottomLimit) {
      moveY = bottomLimit;
    }
    
    ball.style.top = moveY + 'px';
    ball.style.left = moveX + 'px';
})