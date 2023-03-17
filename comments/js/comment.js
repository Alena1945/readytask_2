const comments = [];

const form = document.getElementById('commentForm');
form.addEventListener("submit", formHandler);
form.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 || event.key === 'Enter') formHandler(event);
});

function formHandler(event) {
    event.preventDefault()
    cleanHelpBlocks();
    if (!validateForm(this.name.value, this.date.value, this.message.value)) return
    
    let comment = {
        name : this.name.value,
        date :  this.date.value,
        message :this.message.value,
    }

    comments.push(comment);
    saveComments();
    showComments();

    console.log(comment);

}

function cleanHelpBlocks () {
    const helpDiv = document.getElementsByClassName("help-block");
    for (let div of helpDiv) {
        div.remove();
    }
}

function validateForm(name, date, comment) {
    // Валидация полей формы
    const specials = /[^A-Za-z 0-9]/g;
    let isValid = true;

    if (specials.test(name)) {
        const nameGroup = document.getElementById("nameGroup");
        const errorDiv = document.createElement('div');
        errorDiv.classList.add("help-block");
        const errorMessage = document.createTextNode("Введите корректное имя");
        errorDiv.appendChild(errorMessage);
        nameGroup.appendChild(errorDiv);
        isValid = false;
    }
    return isValid;
}

function saveComments() {
    localStorage.setItem("comment", JSON.stringify(comments));
}

function showComments() {
    let commentField = document.getElementById("comment-field");
    let out = "";
    comments.forEach(function(item) {
        console.log('item', item)
        out += `<p class="time-right right">${getDateTime(item.date)}</p>`;
        out += `<p class="output output-primary">${item.name}</p>`;
        out += `<p class="output output-succsess">${item.message}</p>`;
        out += `<a href="#" class="alert-alert-danger" role="alert" data-time=${item.time}><img class="clean-button" src="img/clean.svg"></a>`;
        out += `<a href="#" class="alert-alert-like" role="alert" like-btn=${item}><img class="like-button" src="img/heart-svgrepo-com.svg"></a>`;
    });

    commentField.innerHTML = out;
}

function getDateTime(date) {
    let correctTime = new Date();
    if (date == '') {
        return `Сегодня, ${correctTime.getHours()}:${correctTime.getMinutes()}`;
    } else {
        if (correctTime.setDate(correctTime.getDate() - 1)) {
            return `Вчера, ${correctTime.getHours()}:${correctTime.getMinutes()}`;
        }
          return `${date.toLocaleDateString()} ${correctTime.getHours()}:${correctTime.getMinutes()}`;
    }
}

document.getElementById('comment-field').addEventListener('click', function(e){
    if (e.target.matches('.clean-button')) {
        e.preventDefault();
        deleteComments(e.target);
    }
})
 
function deleteComments(deleteButton) {
    comments.splice(comments.findIndex(i => i.time == deleteButton.getAttribute('data-time')), 1);
    deleteButton.closest('div').remove();
    saveComments();
}

document.getElementById('comment-field').addEventListener('click', function(e){
    if (e.target.matches('.like-button')) {
        e.preventDefault();
        likeComments(e.target);
    }
})

function likeComments(likeButton) {
    let likes = 0;
    let newLikes = likes + 1;
    return newLikes
}