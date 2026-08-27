/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Bootstrap ScrollSpy
    const sideNav = document.body.querySelector('#sideNav');

    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Navbar responsiva
    const navbarToggler = document.body.querySelector('.navbar-toggler');

    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.forEach(responsiveNavItem => {

        responsiveNavItem.addEventListener('click', () => {

            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }

        });

    });


    // Ícones sociais
    const icons = document.querySelectorAll(".social-icon");

    icons.forEach(icon => {

        const elemento = icon.querySelector("i");

        icon.addEventListener("mouseenter", () => {

            elemento.style.setProperty("--cor1", corAleatoria());
            elemento.style.setProperty("--cor2", corAleatoria());
            elemento.style.setProperty("--cor3", corAleatoria());

        });


        icon.addEventListener("mousemove", (event) => {

            const rect = icon.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            elemento.style.setProperty("--x", `${x}px`);
            elemento.style.setProperty("--y", `${y}px`);

        });

    });

});


function corAleatoria() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}