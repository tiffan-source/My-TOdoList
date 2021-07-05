var addTask = document.querySelector('#submit');
var liste = document.querySelector('#list ul');

var i = 0;

var createTask = function(){
    var task = document.createElement('li');

    var checkTask = document.createElement('input');
    checkTask.type = "checkbox";

    var deleteTask = document.createElement('button');
    deleteTask.innerText = "Delete";

    var textTask = document.createElement('span');
    var input = document.querySelector('#addTodo input');
    textTask.innerHTML = input.value;
    input.value = "";

    task.appendChild(checkTask);
    task.appendChild(textTask);
    task.appendChild(deleteTask);
    task.id = i;

    liste.appendChild(task);
    i++;
}

addTask.addEventListener("click", createTask);