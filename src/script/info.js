'use strict'

// INFO BLOCK

// const infoBlock = document.getElementById('info-block');
// const openBtn = document.getElementById('open-info-btn');

// openBtn.addEventListener('click', function () {
//     if (infoBlock.classList.contains('max-h-0')) {
//         infoBlock.classList.remove('max-h-0');
//         infoBlock.classList.add('max-h-[120rem]', 'duration-700');
//         openBtn.classList.add('rotate-180', 'duration-500');
//     } else {
//         infoBlock.classList.add('max-h-0');
//         infoBlock.classList.remove('max-h-[120rem]', 'duration-700');
//         openBtn.classList.remove('rotate-180');
//     }
// });

// HERO SECTION OPTIMIZATION

window.onload = function () {
    if (window.innerWidth <= 1240) {
        document.getElementById('main-section').classList.remove('lg:pr-[40rem]');
        document.getElementById('main-section').classList.add('lg:pr-[15rem]');
    }
};