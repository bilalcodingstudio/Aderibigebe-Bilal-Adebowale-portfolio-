window.addEventListener("scroll", ()=>{
    const header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
});


const serviceModals = document.querySelectorAll(".service-modal");
const learMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learMoreBtns.forEach((learMoreBtn, i) => {
    learMoreBtn.addEventListener("click", ()=>{
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtn) => {
modalCloseBtn.addEventListener("click", ()=>{
    serviceModals.forEach((modalView) => {
        modalView.classList.remove("active");
    })
});
});

// porfolioModels
const porfolioModels = document.querySelectorAll(".porfolio-model");
const imgCard = document.querySelectorAll(".img-card");
const portfolioClosetn = document.querySelectorAll(".portfolio-close-btn");

var PortfolioModal = function(modalClick){
    porfolioModels[modalClick].classList.add("active");
}

imgCard.forEach((imgCards, i) => {
    imgCards.addEventListener("click", ()=>{
        PortfolioModal(i);
    });
});
portfolioClosetn.forEach((portfolioClosetns) => {
    portfolioClosetns.addEventListener("click", ()=>{
        porfolioModels.forEach((portfoliomodalView) => {
            portfoliomodalView.classList.remove("active");
    })
});
});

const scrollToTopBtn = document.querySelector(".scrollToTop-btn");


window.addEventListener("scroll", function(){
    scrollToTopBtn.classList.toggle("active", window.scrollY > 500)
});

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", ()=>{
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 100;
        let id = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});


 
const themeBtn= document.querySelector(".theme-btn");
themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme");
    // themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    // localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = ()=> document.body.classList.contains("dark-theme") ? 'dark' : 'light';
// const getCurrentIcon = () => document.body.classList.contains("sun") ? "sun" : "moon";


const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    // themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun"); 
}


const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn")
const navigtion = document.querySelector(".navgation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", ()=> {
    navigtion.classList.add("active");
});
closeBtn.addEventListener("click", ()=> {
    navigtion.classList.remove("active");
});


navItems.forEach((navItems) => {
    navItems.addEventListener("click", ()=>{
        navigtion.classList.remove("active");
    });
});

