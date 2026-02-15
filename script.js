// VARIABLES
const envelope = document.getElementById('envelope');
const hintText = document.querySelector('.hint-text');

const nextBtn1 = document.getElementById('nextBtn1');
const nextBtn2 = document.getElementById('nextBtn2');
const nextBtn3 = document.getElementById('nextBtn3');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');

// VARIABLES FOTOS
const viewOnceBtn = document.getElementById('viewOnceBtn');
const photoModal = document.getElementById('photoModal');
const modalImg = document.getElementById('modalImg');
const closePhoto = document.getElementById('closePhoto');
const statusText = document.getElementById('statusText');
const iconCircle = document.querySelector('#viewOnceBtn .icon-circle');

// VARIABLES VIDEO
const viewOnceVideoBtn = document.getElementById('viewOnceVideoBtn');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeVideo = document.getElementById('closeVideo');
const statusVideoText = document.getElementById('statusVideoText');
const iconVideoCircle = document.querySelector('#viewOnceVideoBtn .icon-circle');

// 1. ABRIR SOBRE
envelope.addEventListener('click', () => {
    // Si ya tiene la clase, no hacemos nada (para evitar doble animación rara)
    if (!envelope.classList.contains('flap')) {
        envelope.classList.add('flap');
        
        if (hintText) hintText.style.display = 'none';

        setTimeout(() => {
            nextBtn1.classList.remove('hidden');
        }, 1000);
    }
});

// 2. NAVEGACIÓN
function changeSection(hideSec, showSec) {
    hideSec.style.opacity = '0';
    setTimeout(() => {
        hideSec.classList.add('hidden');
        showSec.classList.remove('hidden');
        window.scrollTo(0, 0); // Sube la pantalla al cambiar sección
        setTimeout(() => { showSec.style.opacity = '1'; }, 50);
    }, 500);
}

nextBtn1.addEventListener('click', () => changeSection(section1, section2));
nextBtn2.addEventListener('click', () => changeSection(section2, section3));
nextBtn3.addEventListener('click', () => changeSection(section3, section4));

// 3. FOTO WHATSAPP
let isPhotoViewed = false;
viewOnceBtn.addEventListener('click', () => {
    if (!isPhotoViewed) {
        modalImg.src = "resources/image 1.jpg";
        photoModal.style.display = "flex";
        isPhotoViewed = true;
    }
});

// COLLAGE
function openCollage(imgElement) {
    modalImg.src = imgElement.src;
    photoModal.style.display = "flex";
}

closePhoto.addEventListener('click', () => {
    photoModal.style.display = "none";
    // Solo bloquea si era la imagen 1
    if (isPhotoViewed && modalImg.src.includes("image%201.jpg")) {
        markAsOpened(viewOnceBtn, statusText, iconCircle);
    }
});

// 4. VIDEO WHATSAPP
let isVideoViewed = false;
viewOnceVideoBtn.addEventListener('click', () => {
    if (!isVideoViewed) {
        videoModal.style.display = "flex";
        modalVideo.play();
        isVideoViewed = true;
    }
});

closeVideo.addEventListener('click', () => {
    videoModal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
    markAsOpened(viewOnceVideoBtn, statusVideoText, iconVideoCircle);
});

function markAsOpened(btn, text, circle) {
    btn.classList.add('opened');
    text.innerText = "Abierto";
    circle.style.border = "2px solid #8696a0";
    circle.innerHTML = "";
}