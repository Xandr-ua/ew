(function () {
    const burger = document.querySelector('.header__mobile-btn');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active'); 
    } )
}());

function toggleMenu() {
    const btn = document.getElementById('btn-menu');
    const menu = document.getElementById('list-menu');

    btn.classList.toggle('active');
    menu.classList.toggle('active');
}