'use strict'

const info = document.getElementById('info')
const infoBtn = document.getElementById('info-btn')

infoBtn.addEventListener( 'click', () => {
    info.classList.remove('h-auto');
    info.classList.add('h-[500px]', 'duration-500');
})