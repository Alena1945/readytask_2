// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

const panels = document.querySelectorAll('.box__pane');
const button = document.querySelector('.remove-button');

for (let pane of panels) {
    const cloneButton = button.cloneNode(true);
    pane.prepend(cloneButton);

    cloneButton.style.display = 'block';
    cloneButton.style.position = 'absolute';

    cloneButton.onclick = () => pane.style.display = 'none';
}