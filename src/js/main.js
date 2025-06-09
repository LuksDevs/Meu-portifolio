

// ====== Script de Envio de Mensamge - Whatsapp ====== //
    function sendMessage(event) {
        event.preventDefault();
        const fieldName = document.querySelector('#name').value;
        const fieldMessage = document.querySelector('#message').value;
        
        if(!fieldName == '' && !fieldMessage == ''){
            const  telephone = '5581999954788';
            const formatMessage = `Olá me chamo ${fieldName}, ${fieldMessage}`;
            const message = encodeURIComponent(formatMessage);

            const url = `https://wa.me/${telephone}?text=${message}`;

            window.open(url, '_blank');
            fieldName.value = '';
            fieldMessage.value = '';
        } else {
            alert('Preencha todos os campos')
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


function openModal(msg) {
    const divContainer = document.createElement('div');
    const divContent = document.createElement('div');

    if(!document.getElementById('modal_alert')){
        divContainer.className = 'container-modal active';
        divContainer.id = 'modal_alert';

        divContent.className = 'content-modal';
        divContent.innerHTML = `
            <h2 class="title-modal"> Ops... algo deu errado!</h2>
            <hr>
            <div class="text-modal">
                <p><i class="fa-solid fa-circle-info"></i> ${msg}</p>
            </div>
            <button type="button" class="btn-modal">Fechar</button>
        `;
        divContainer.appendChild(divContent);
    }
    document.body.appendChild(divContainer);
}

openModal('testando..');