const finishTask = (update, id) => {
    const createdTasks = JSON.parse(localStorage.getItem('tasks'));

    createdTasks[id].conclude = !createdTasks[id].conclude;

    localStorage.setItem('tasks', JSON.stringify(createdTasks));

    update();
}

const FinishButton = (update, id) => { // componente do botão de concluir tarefa
    const finishButton = document.createElement('button'); // cria o elemento HTML

    finishButton.classList.add('check-button'); // adiciona a classe CSS
    finishButton.innerText = 'concluir'; // adiciona o texto no botão

    finishButton.addEventListener('click', () => finishTask(update, id)); // adiciona o evento de clique do botão

    return finishButton;
}

export default FinishButton;