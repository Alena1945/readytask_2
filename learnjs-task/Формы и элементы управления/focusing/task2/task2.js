let table = document.getElementById('bagua-table');
let textareaEl;                                           

table.addEventListener('click', function(event) {
  if(textareaEl) return;                                  

  let td = event.target.closest('TD');
  if(!td || !table.contains(td)) return;                   

  textareaEl = createTextarea(td);

  let buttonOK = createButtonOK(textareaEl);
  
  let buttonRes = createButtonRes(textareaEl, buttonOK);

  finalEdit(buttonOK, buttonRes, td);
  finalEdit(buttonRes, buttonOK, td);
});

function createTextarea(elemTD) {
  textareaEl = document.createElement('textarea');
  textareaEl.classList.add("edit");
  textareaEl.value = elemTD.innerHTML;  
  textareaEl.style.width = elemTD.clientWidth + 'px';         
  textareaEl.style.height = elemTD.clientHeight + 'px';
  elemTD.replaceWith(textareaEl);                              
  textareaEl.focus();
  return textareaEl;
}

function createButtonOK(elemTextarea) {
  let buttonOK = document.createElement('button');
  buttonOK.classList.add("ok");
  buttonOK.innerHTML = 'OK';
  document.body.append(buttonOK);
  buttonOK.style.top = elemTextarea.getBoundingClientRect().bottom - 1 + 'px';  
  buttonOK.style.left = elemTextarea.getBoundingClientRect().left + elemTextarea.clientWidth/2 - buttonOK.clientWidth + 'px';
  return buttonOK;
}

function createButtonRes(elemTextarea, buttOK) {
  let buttonRes = document.createElement('button');
  buttonRes.classList.add("res");
  buttonRes.innerHTML = 'Отмена';
  document.body.append(buttonRes);
  buttonRes.style.top = elemTextarea.getBoundingClientRect().bottom - 1 + 'px'; 
  buttonRes.style.left = buttOK.getBoundingClientRect().right + 'px';
  return buttonRes;
}

function finalEdit(button1, button2, Eltd) {
  button1.onclick = () => {
    if(button1.innerHTML == 'OK') {
      Eltd.innerHTML = textareaEl.value;
    }
    textareaEl.replaceWith(Eltd);
    button1.remove();
    button2.remove();
    textareaEl = null;                 
  };
}