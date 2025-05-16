let $todoInput; 
let $alertInfo; 
let $addBtn;
let $ulList; 
let $newTask; 
let $allTasks; 
let $idNumber = 0; 
let $popup; 
let $popupInfo; 
let $editedTodo; 
let $popupInput; 
let $addPopupBtn; 
let $closeTodoBtn;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todo-input');
    $alertInfo = document.querySelector('.alert-info');
    $addBtn = document.querySelector('.add-btn');
    $ulList = document.querySelector('.todo-list ul');
    $allTasks = document.getElementsByTagName('li');
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popup-info');
    $popupInput = document.querySelector('.popup-input');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $todoInput.addEventListener('keyup', enterCheck);
    $ulList.addEventListener('click', checkClick);
}

const addNewTask = () => {
    if($todoInput.value === '') 
    {
        $alertInfo.innerHTML = 'Please enter a task.';
    }
    else 
    {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`);
        
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
    }
}

const enterCheck = () => {
    if (event.keyCode === 13) {
        addNewTask();
    }
}

const createToolsArea = () => 
{
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fa-solid fa-times"></i>';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
}

const checkClick = (e) => 
{
    if(e.target.classList.value !== '')
    {
        if(e.target.closest('button').classList.contains('complete'))
        {
            e.target.closest('li').classList.toggle('completed');
            e.target.closest('button').classList.toggle('completed');
        } 
        else if(e.target.closest('button').classList.contains('edit-btn'))
        {
            console.log('edit');
        } 
        else if(e.target.closest('button').classList.contains('delete-btn'))
        {
            deleteTask(e);
        }
    }
}

const deleteTask = (e) =>
{
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();

    if($allTasks.length === 0)
    {
        $alertInfo.innerText = 'There is no tasks on the list.';
    }
    else
    {
        $alertInfo.innerText = '';
    }
}


document.addEventListener('DOMContentLoaded', main);