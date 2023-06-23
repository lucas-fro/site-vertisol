document.addEventListener("DOMContentLoaded", function() {
    
    /*slides*/  

    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    let timer;

    function showSlide(index) {
        slides.forEach(function(slide, idx) {
            if (idx === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
    }

    function startTimer() {
        timer = setInterval(showNextSlide, 7000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    prevBtn.addEventListener("click", function() {
        stopTimer();
        showPrevSlide();
        startTimer();
    });

    nextBtn.addEventListener("click", function() {
        stopTimer();
        showNextSlide();
        startTimer();
    });

    showSlide(currentIndex);
    startTimer();

    /*navbar-mobilemenu */

    
});
