let inputField = document.querySelector('#inputField');
let submitBtn = document.querySelector('#submit-btn');
let toDoList = document.querySelector('#toDoList');
let toDoItems = document.querySelector('.toDoItems');

submitBtn.addEventListener('click', function(){
    let newLi = document.createElement('li');
    newLi.className = 'toDoItems';
    toDoList.appendChild(newLi);
    newLi.textContent = inputField.value;
    inputField.value = "";
});

inputField.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        let newLi = document.createElement('li');
        newLi.className = 'toDoItems';
        toDoList.appendChild(newLi);
        newLi.textContent = inputField.value;
        inputField.value = "";
      }
});

toDoList.addEventListener('click', function(e){
    e.target.remove();
});