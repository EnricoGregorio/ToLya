'use strict';

const date = new Date();

// Página do cartão.
const alertMsg = window.document.querySelector('.alert');
const calmMsg = window.document.querySelector('.calm');
const btnOpen = window.document.querySelector('#heart');
const daysMsg = window.document.querySelector('#days');

const day = Number(date.getDate());
const dayRest = 30 - day;

let countOfClicks = 0;

function showMessage() {
    if (dayRest === 0) {
        window.location.assign('gallery.html');
    } else {
        countOfClicks++;
        switch (countOfClicks) {
            case 1:
                daysMsg.textContent = dayRest;
                alertMsg.classList.remove('hidden');
                break;
            case 2:
                calmMsg.classList.remove('hidden');
                break;
            case 10:
                calmMsg.classList.add('calm-alert');
                calmMsg.textContent = "É SÉRIO. CALMA!";
            default:
                break;
        }
    }
}

try {
    btnOpen.addEventListener('click', showMessage);
} catch (error) {
    console.log('Não estamos na página da carta.');
}