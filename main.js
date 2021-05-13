import { handleNewItem } from './components/createTask.js';
import { loadTask } from './components/loadTask.js';

const newTask = document.querySelector('[data-form-button]');  // selecionamos o elemento botão no html

newTask.addEventListener('click', handleNewItem); // adicionamos um evento de onClick no botão para que seja executada uma função

loadTask();

// IIFE - Immediately invoked function expression - 
// basicamente protegemos a regra de negócio da nossa aplicação para que a mesma não possa ser acessada no console do navegador