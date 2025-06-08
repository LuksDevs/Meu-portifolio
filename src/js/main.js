
// Script carousel
const carousel = document.getElementById('carousel');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

// Botões
btnPrev.addEventListener('click', () => {
carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

btnNext.addEventListener('click', () => {
carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

// Drag com mouse
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.remove('cursor-grab');
    carousel.classList.add('cursor-grabbing');
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('cursor-grabbing');
    carousel.classList.add('cursor-grab');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('cursor-grabbing');
    carousel.classList.add('cursor-grab');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
});

// Scroll horizontal com a rodinha do mouse
carousel.addEventListener('wheel', (e) => {
    if (e.deltaY === 0) return; // ignora scroll lateral
    e.preventDefault(); // impede o scroll vertical padrão
    carousel.scrollBy({
        left: e.deltaY < 0 ? -500 : 500,
        behavior: 'smooth'
    });
});