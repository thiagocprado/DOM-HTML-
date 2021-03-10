
const DeleteButton = () => {
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "deletar";
    deleteButton.addEventListener("click", deleteTask);

    return deleteButton;
}

const deleteTask = (event) => {
    const deleteButton = event.target;

    const removeTask = deleteButton.parentElement;

    removeTask.remove();

    return deleteButton;
}

export default DeleteButton;