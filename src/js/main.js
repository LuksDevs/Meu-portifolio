

// ====== Script de Envio de Mensamge - Whatsapp ====== //
    function sendMessage(event) {
        event.preventDefault();
        const fieldName = document.querySelector('#name').value;
        const fieldMessage = document.querySelector('#message').value;
        
        if(!fieldName == '' && !fieldMessage == ''){
            const text = `Olá! Me chamo ${fieldName}, ${fieldMessage}`;
            const message = encodeURIComponent(text);
            const telephone = '5599999999999';

            const url = `https://wa.me/${telephone}?text=${message}`;

            window.open(url, '_blank');
            fieldName.value = '';
            fieldMessage.value = '';
        } else {
            openModal();
        }
        
    }
        

// ================ Script do carousel ================ //
const carousel = document.getElementById('carousel');

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
    const walk = (x - startX) * 2.5; //sensibilidade do arraste com o mouse
    carousel.scrollLeft = scrollLeft - walk;
});

// Scroll horizontal com a rodinha do mouse
carousel.addEventListener('wheel', (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    carousel.scrollBy({
        left: e.deltaY < 0 ? -600 : 600, //velocidade do scroll
        behavior: 'smooth'
    });
});


// ======= script modal Alert ====== // 

const blurModal = document.querySelector('.blur-modal');
const modal = document.querySelector('.container-modal');

function openModal() {
    blurModal.classList.add('active');
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    blurModal.classList.remove('active');
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}