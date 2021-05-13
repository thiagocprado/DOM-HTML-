import { orderDates, removeRepeatedDate } from '../service/date.js';
import { createDate } from './createDate.js';

export const loadTask = () => {
    const list = document.querySelector('[data-list]');

    const createdTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    list.innerHTML = " ";

    const uniqueDates = removeRepeatedDate(createdTasks);
    orderDates(uniqueDates);

    uniqueDates.forEach(day => {
        list.appendChild(createDate(day));
    });
}