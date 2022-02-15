let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');
addToDoButton.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";
    //tıklayınca kırmızı yap
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration= 'line-through';
    })
    //çift tıklayınca sil
    paragraph.addEventListener('dblclick', function () {
    toDoContainer.removeChild(paragraph);
    })
    clearToDo.addEventListener('click', function () {
        paragraph.remove();
    })
});