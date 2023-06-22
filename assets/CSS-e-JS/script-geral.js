document.addEventListener("DOMContentLoaded", function() {
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
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
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

  function formatarTelefone(input) {
    var telefone = input.value;
  
    telefone = telefone.replace(/\D/g, "");
  
    var formattedTelefone;
  
    if (telefone.length === 9) {
      formattedTelefone = telefone.replace(/(\d{5})(\d{4})/, "$1-$2");
    } else if (telefone.length === 11) {
      formattedTelefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (telefone.length === 13) {
      formattedTelefone = telefone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");
    } else {
      formattedTelefone = telefone;
    }
  
    input.value = formattedTelefone;
  }
  
  function formatarCnpjCpf(input) {
    var cnpjCpf = input.value;
  
    cnpjCpf = cnpjCpf.replace(/\D/g, "");
  
    var formattedCnpjCpf;
  
    if (cnpjCpf.length === 11) {
      formattedCnpjCpf = cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (cnpjCpf.length === 14) {
      formattedCnpjCpf = cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    } else {
      formattedCnpjCpf = cnpjCpf;
    }
  
    input.value = formattedCnpjCpf;
  }

});