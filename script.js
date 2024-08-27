document.addEventListener("DOMContentLoaded", function () {
    // Här kan du lägga till interaktivitet senare, om det behövs.
});
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 100) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
};
