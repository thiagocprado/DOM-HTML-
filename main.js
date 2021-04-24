import FinishButton from "./components/finishTask";
import DeleteButton from "./components/deleteTask";

const handleNewItem = (event) => {
    event.preventDefault(); // preveni o reload da página

    const list = document.querySelector("[data-list]"); // selecionamos no html nossa tag <ul>
    const input = document.querySelector("[data-form-input]"); // pegamos o elemento do html 
    const inputValue = input.value; // pegamos o valor do input 

    const calendar = document.querySelector("[data-form-date]");
    const date = moment(calendar.value);

    const formatedDate = date.formart("DD/MM/YYYY");

    const data = {
        inputValue, formatedDate
    }

    const createTask = createTask(data);

    list.appendChild(createTask); // adicionamos nossa tag <li> com o <p> dentro do nosso <ul> 
    input.value = ""; // limpamos o valor do input
}

const createTask = ({ inputValue, formatedDate }) => { // desestruturação

    const task = document.createElement("li"); // cria um elemento <li> dinâmicamente
    task.classList.add("task"); // adiciona a classe CSS a nossa <li>
    const content = `<p class=content>${formatedDate} * ${inputValue}</p>`; // criamos nossa tag <p> com o valor do nosso input

    task.innerHTML = content; // acessamos a tag <li> e passamos o valor do nosso conteudo que é a tag <p> + o valor do input

    task.appendChild(FinishButton()); // cria o nosso botão dentro da nossa <li>
    task.appendChild(DeleteButton()); // cria o nosso botão dentro da nossa <li>

    return task;
}

const newTask = document.querySelector("[data-form-button]");  // selecionamos o elemento botão no html
newTask.addEventListener("click", handleNewItem); // adicionamos um evento de onClick no botão para que seja executada uma função

// IIFE - Immediately invoked function expression - basicamente protegemos a regra de negócio da nossa aplicação para que a mesma não possa ser acessada no console do navegador