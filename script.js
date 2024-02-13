document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.transform = 'translateX(-100%)';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.transform = 'translateX(0)';
    }

    setInterval(function () {
        showSlide(currentSlide + 1);
    }, 2000);
});
