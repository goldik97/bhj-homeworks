const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const buttonAdd = document.getElementById('tasks__add');

function addTask(event) {
    if(taskInput.value) {
        event.preventDefault();
        taskList.insertAdjacentHTML("beforeend", `
            <div class="task">
            <div class="task__title">
            ${taskInput.value}
             </div>
            <a href="#" class="task__remove">&times;</a>
            </div>`)

            taskInput.value = '';
    }
}

buttonAdd.addEventListener('click', addTask);

taskList.onclick = function(event) {
    if(event.target.classList.contains('task__remove')) {
        event.target.closest('.task').remove();
    };   
};