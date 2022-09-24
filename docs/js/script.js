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

function loadPage() {
    return window.location.assign('gallery.html');
}

function showMessage() {
    if (dayRest === 0) {
        alertMsg.textContent = "Chegou o dia!!! Feliz dois meses minha vida! Eu te amo muito💗💗💗!";
        alertMsg.classList.remove('hidden');
        setTimeout(loadPage, 5000);
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

// Página principal

// Função para revelar as photos ao scrollar.
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible)
            reveal.classList.add('active');
        else
            reveal.classList.remove('active');
    });
}

window.addEventListener('scroll', reveal)