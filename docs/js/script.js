'use strict';

// Página do cartão.
const alertMsg = window.document.querySelector('.alert');
const btnOpen = window.document.querySelector('#heart');

function loadPage() {
    return window.location.assign('gallery.html');
}

try {
    btnOpen.addEventListener('click', () => {
        alertMsg.classList.remove('hidden');
        setTimeout(loadPage, 5000);
    });
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

window.addEventListener('scroll', reveal);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const phrase = document.querySelector('#phrase');

// Função para mostrar e função para esconder as classes 'modal' e 'overlay'.
function openModal(i) {
    if (btnsOpenModal[i].classList.contains('p1')) {
        phrase.textContent = 'Que nosso amor seja eterno enquanto dure.'
    } else if (btnsOpenModal[i].classList.contains('p2')) {
        phrase.textContent = 'Às vezes eu acho que o "Eu te amo" é pouco para definir o quanto eu sinto por você.';
    } else if (btnsOpenModal[i].classList.contains('p3')) {
        phrase.textContent = 'Você é o mais lindo, adorável, fofo, lindo, deslumbrante, sensual e deslumbrante. Você é o meu tudo. Eu simplesmente não consigo imaginar minha vida sem você.';
    } else if (btnsOpenModal[i].classList.contains('p4')) {
        phrase.textContent = 'Não consigo imaginar uma vida sem você, querida. Eu me sinto sortudo por ter você em minha vida.';
    } else if (btnsOpenModal[i].classList.contains('p5')) {
        phrase.textContent = 'Meu amor, devo ser o homem mais sortudo por ter alguém como você em minha vida! Todos os dias da minha vida são lindos por sua causa! Você é o meu tudo!';
    } else if (btnsOpenModal[i].classList.contains('p6')) {
        phrase.textContent = 'Eu só quero que nosso amor dure. Porque você é único, não consigo tirar você da minha mente. Eu amo Você.';
    } else if (btnsOpenModal[i].classList.contains('p7')) {
        phrase.textContent = 'Posso não ser um namorado perfeito. Mas meu amor por você é o mais verdadeiro de todos. Cada batida do meu coração diz que é verdade!';
    } else if (btnsOpenModal[i].classList.contains('p8')) {
        phrase.textContent = 'As palavras serão insuficientes se eu quiser descrever o quanto você significa para mim, mas espero que meu amor diga a você o que meus pensamentos não conseguem! Te amo princeso.';
    }
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

try {
    // Evento de click nos botões da Janela Modal.
    for (let i = 0; i < btnsOpenModal.length; i++) {
        btnsOpenModal[i].addEventListener('click', () => openModal(i));
    }
    // Evento que fechará a janela pelo Overlay e evento que fechará a janela pelo botão de fechar.
    overlay.addEventListener('click', closeModal);
    btnCloseModal.addEventListener('click', closeModal);
} catch (error) {
    console.log('Não estamos na página principal.');
}
