const form = document.querySelector('form');
const inputAdd = document.querySelector('input.add');
const inputSearch = document.querySelector('input.search');
const taskNumber = document.querySelector('h1 span');
const ul = document.querySelector('ul');
// const li = document.querySelectorAll('li');
const listItems = document.getElementsByClassName('task');

const addTask = (e) => {
    e.preventDefault();

    const newTask = inputAdd.value;

    if (newTask === ``) return alert('Wpisz nowe zadanie');
    const task = document.createElement('li');
    task.className = `task`;
    task.innerHTML = `${newTask} <button>Remove/Done</button>`;
    ul.appendChild(task);

    inputAdd.value = ``;

    taskNumber.textContent = `${listItems.length}`;

    task.querySelector('button').addEventListener('click', removeTask);

    inputSearch.addEventListener('input', searchTask);
};

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = `${listItems.length}`;
};

const searchTask = (e) => {
    const searchItem = e.target.value;
    let tasks = [...listItems];
    tasks = tasks.filter(task => {
        return task.textContent.includes(searchItem);
    });

    ul.textContent = ``;

    tasks.forEach(task => ul.appendChild(task));
    taskNumber.textContent = `${listItems.length}`;
};

form.addEventListener('submit', addTask);