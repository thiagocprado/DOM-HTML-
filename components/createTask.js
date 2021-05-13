import FinishButton from './finishTask.js';
import DeleteButton from './deleteTask.js';
import { loadTask } from './loadTask.js';

export const handleNewItem = event => {
    event.preventDefault(); // preveni o reload da página

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const input = document.querySelector('[data-form-input]'); // pegamos o elemento do html 
    const inputValue = input.value; // pegamos o valor do input 

    const calendar = document.querySelector('[data-form-date]');
    const date = moment(calendar.value);
    const hour = date.format('HH:mm')

    const formatedDate = date.format('DD/MM/YYYY');
    const conclude = false;

    const data = {
        inputValue,
        formatedDate,
        hour,
        conclude
    }

    const updatedTasks = [...tasks, data]

    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // armazena as informações no navegador 

    input.value = " "; // limpamos o valor do input
    loadTask();
}

export const Task = ({ inputValue, hour, conclude }, id) => { // desestruturação

    const task = document.createElement('li'); // cria um elemento <li> dinâmicamente
    const content = `<p class=content>${hour} * ${inputValue}</p>`; // criamos nossa tag <p> com o valor do nosso input

    if (conclude) {
        task.classList.add('done'); // adiciona a classe CSS a nossa <li>
    }

    task.classList.add('task');
    task.innerHTML = content; // acessamos a tag <li> e passamos o valor do nosso conteudo que é a tag <p> + o valor do input

    task.appendChild(FinishButton(loadTask, id)); // cria o nosso botão dentro da nossa <li>
    task.appendChild(DeleteButton(loadTask, id)); // cria o nosso botão dentro da nossa <li>

    return task;
}