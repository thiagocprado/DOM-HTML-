const deleteTask = (update, id) => {

    const index = id;
    const createdTasks = JSON.parse(localStorage.getItem('tasks'));

    createdTasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(createdTasks));

    update();
}

const DeleteButton = (update, id) => {
    const deleteButton = document.createElement('button');

    deleteButton.innerText = 'deletar';
    deleteButton.addEventListener('click', () => deleteTask(update, id));

    return deleteButton;
}

export default DeleteButton;