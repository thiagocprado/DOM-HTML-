const FinishButton = () => { // componente do botão de concluir tarefa
    const finishButton = document.createElement("button"); // cria o elemento HTML

    finishButton.classList.add("check-button"); // adiciona a classe CSS
    finishButton.innerText = "concluir"; // adiciona o texto no botão
    finishButton.addEventListener("click", finishTask); // adiciona o evento de clique do botão

    return finishButton;
}

const finishTask = (event) => { // adicionaremos o traço em cima do texto para mostrar que aquela tarefa foi concluida
    const finishButton = event.target; // pegamos o valor do evento de clique do botão de concluir

    const taskCompleted = finishButton.parentElement; // acessamos o pai do elemento, no caso o pai do botão, e o pai dele é a tag <li>

    taskCompleted.classList.toggle("done"); // executa a classe CSS de finalizar tarefa a partir do momento quye clicamos no botão (retorna um booleano)
}

export default FinishButton;