// Espera a que todo el contenido del HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Encuentra el botón y el menú por sus IDs
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // 2. Escucha si alguien hace "clic" en el botón
    hamburgerBtn.addEventListener('click', () => {
        
        // 3. Al hacer clic, alterna la clase 'is-active' en AMBOS
        hamburgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });

});