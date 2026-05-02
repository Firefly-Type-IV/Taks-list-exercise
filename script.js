// QUery selectpr method belongs to the document object, we can pass arguments in the form of a string
// tasks = [];

function addTask() {
    const listOfTasks = document.querySelector('.task-list');
    const userText = document.querySelector('.task-input').value;
    
    if(userText) {

        const list = document.createElement('li');
        // list.textContent = userText;
        const span = document.createElement('span');
        span.textContent = userText;
        span.className = 'task-text';
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            listOfTasks.removeChild(list);
        });
        list.appendChild(span);
        list.appendChild(deleteButton);
        listOfTasks.appendChild(list);
    } else {
        return;
    }
}

document.querySelector('.task-input').addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
    addTask();
}
});
document.querySelector('.task-input').addEventListener('keydown', function(event) {
if (event.key === 'Backspace') {
    clearInput();
}
});


function clearInput() {
    document.querySelector('.task-input').value = '';
}