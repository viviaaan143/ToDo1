function onReady(){
  let toDos = [];

  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    // avoids redirecting user to a new page
    event.preventDefault();

    // get the text
    let title = NEW_TODO_TEXT.value;

    toDos.push(title);
    console.log(toDos);

    toDos.push(toDoObj)

    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      TODO_LIST.removeChild(this.parentElement);
    })

    // set the title
    newLi.textContent = title;
    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    // attach the li to the ul
    TODO_LIST.appendChild(newLi);
    // empty input
    NEW_TODO_TEXT.value = '';
  });
};

window.onload = function() {
  onReady();
};
