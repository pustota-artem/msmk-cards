'use strict'

const infoBlock = document.getElementById('info-block');
const openBtn = document.getElementById('open-info-btn');
const closeBtn = document.getElementById('close-info-btn')

openBtn.addEventListener('click', function () {
    infoBlock.classList.remove('max-h-0');
    infoBlock.classList.add('max-h-60');
    closeBtn.classList.remove('hidden');
    openBtn.classList.add('hidden');
})

closeBtn.addEventListener('click', function () {
    infoBlock.classList.remove('max-h-60'); 
    infoBlock.classList.add('max-h-0');
    closeBtn.classList.add('hidden');
    openBtn.classList.remove('hidden');
})