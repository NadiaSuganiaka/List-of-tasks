document.querySelector('#newTask').addEventListener('click', function (){
    const text = document.querySelector('#inputText');
    const task = text.value.trim();

    if (task === "") {
        return;
    }

    const list = document.querySelector('#List');

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = task;
    li.appendChild(span);

    const doneButton = document.createElement('button');
    doneButton.textContent = 'done';
    doneButton.addEventListener('click', function () {
        span.style.textDecoration = 'line-through';      
    });
    li.appendChild(doneButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', function () {
        li.remove();
    });
    li.appendChild(deleteButton);

    list.appendChild(li);

text.value = "";
});