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

    class MobileNavbar {
        constructor(mobileMenu, navList, navLinks) {
          this.mobileMenu = document.querySelector(mobileMenu);
          this.navList = document.querySelector(navList);
          this.navLinks = document.querySelectorAll(navLinks);
          this.activeClass = "active";
      
          this.handleClick = this.handleClick.bind(this);
        }
      
        animateLinks() {
          this.navLinks.forEach((link, index) => {
            link.style.animation
              ? (link.style.animation = "")
              : (link.style.animation = `navLinkFade 0.3s ease forwards ${
                  index / 15 + 0.3
                }s`);
          });
        }
      
        handleClick() {
          this.navList.classList.toggle(this.activeClass);
          this.mobileMenu.classList.toggle(this.activeClass);
          this.animateLinks();
        }
      
        addClickEvent() {
          this.mobileMenu.addEventListener("click", this.handleClick);
        }
      
        init() {
          if (this.mobileMenu) {
            this.addClickEvent();
          }
          return this;
        }
      }
      
      const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
      );
      mobileNavbar.init();
});
