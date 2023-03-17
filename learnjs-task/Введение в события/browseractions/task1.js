// Почему в коде ниже return false не работает?

//  <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>

// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

// Браузер переходит по указанной ссылке, но нам этого не нужно.

// Как поправить?

// Тк браузер считывает атрибут on*. Он создаёт функцию-обработчик с содержимым этого атрибута в качестве тела функции.

function handler() {
alert("...");
return false;
}

<a href="https://w3.org" onclick="return handler()">w3.org</a>