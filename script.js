document.addEventListener("DOMContentLoaded", function () {
    // Kod som körs när hela dokumentet är laddat

    // Hantera headerns storlek vid scrollning
    window.onscroll = function() {
        const header = document.querySelector('header');
        if (window.pageYOffset > 100) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    };

    // Hantera hamburger-menyn
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
});
