/* Barra de navegacion */
/* window.addEventListener('scroll', () => {
    let header = document.querySelector('.cabecera');
    let navLinks = document.querySelectorAll('.navegador a');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
        header.style.background = '#fdfdfd';
        header.style.boxShadow = '0 0.1rem 1rem rgba(0, 0, 0, 2)';

        navLinks.forEach(function (link) {
            link.classList.add('cambio-color');
        });
    } else {
        header.classList.remove('sticky');
        header.style.background = '';
        header.style.boxShadow = '';

        navLinks.forEach(function (link) {
            link.classList.remove('cambio-color');
        });
    }
}); */

/* menu icono navegacion */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navegador');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* activar seccion cuando realiza scroll la persona */
let seccion = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    seccion.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('activar');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activar');
            });
        };
    });
};

/* Cambiar estrutura header despues de hacer scroll */
window.addEventListener('scroll', function () {
    let header = document.querySelector('.cabecera');
    

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    console.log(window.scrollY);
});