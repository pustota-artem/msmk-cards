'use strict'

const infoBlock = document.getElementById('info-block');
const openBtn = document.getElementById('open-info-btn');

openBtn.addEventListener('click', function () {
    if (infoBlock.classList.contains('max-h-0')) {
        infoBlock.classList.remove('max-h-0');
        infoBlock.classList.add('max-h-[120rem]', 'duration-700');
        openBtn.classList.add('rotate-180', 'duration-500');
    } else {
        infoBlock.classList.add('max-h-0');
        infoBlock.classList.remove('max-h-[120rem]', 'duration-700');
        openBtn.classList.remove('rotate-180');
    }
});


window.onload = function () {
    if (window.innerWidth <= 1240) {
        document.getElementById('main-section').classList.remove('lg:pr-[40rem]');
        document.getElementById('main-section').classList.add('lg:pr-[15rem]');
    } else {
        document.getElementById('videoBG').innerHTML = '<source src="src/video/video1.webm" type="video/webm"> <source src="src/video/video1.mp4" type="video/mp4">'
    }
};


// document.getElementById('btn-self').addEventListener('click', () => {
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('popup').classList.add('popup');
//     document.getElementById('frame1').classList.remove('hidden');
//     document.getElementById('popup-close').classList.remove('hidden');

// });

// document.getElementById('btn-base').addEventListener('click', () => {
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('popup').classList.add('popup');
//     document.getElementById('frame2').classList.remove('hidden');
//     document.getElementById('popup-close').classList.remove('hidden');

// });

// document.getElementById('btn-prem').addEventListener('click', () => {
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('popup').classList.add('popup');
//     document.getElementById('frame3').classList.remove('hidden');
//     document.getElementById('popup-close').classList.remove('hidden');

// });

// document.getElementById('overlay').addEventListener('click', () => {
//     document.getElementById('overlay').classList.remove('overlay');
//     document.getElementById('popup').classList.remove('popup');
//     document.getElementById('frame1').classList.add('hidden');
//     document.getElementById('frame2').classList.add('hidden');
//     document.getElementById('frame3').classList.add('hidden');
//     document.getElementById('booking1').classList.add('hidden');
//     document.getElementById('booking2').classList.add('hidden');
//     document.getElementById('booking3').classList.add('hidden');
//     document.getElementById('popup-close').classList.add('hidden');
// });


// document.getElementById('booking-btn1').addEventListener('click', () => {
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('popup').classList.add('popup');
//     document.getElementById('booking1').classList.remove('hidden');
//     document.getElementById('popup-close').classList.remove('hidden');

// });

// document.getElementById('booking-btn2').addEventListener('click', () => {
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('popup').classList.add('popup');
//     document.getElementById('booking2').classList.remove('hidden');
//     document.getElementById('popup-close').classList.remove('hidden');

// });

// document.getElementById('booking-btn3').addEventListener('click', () => {
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('overlay').classList.add('overlay');
//     document.getElementById('popup').classList.add('popup');
//     document.getElementById('booking3').classList.remove('hidden');
//     document.getElementById('popup-close').classList.remove('hidden');

// });