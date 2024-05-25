var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Author", "Blogger", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});


const hamberger = document.querySelector(".hamberger");
const navMenu = document.querySelector(".nav-menu");

hamberger.addEventListener("click", () =>{
    hamberger.classList.toggle("active");
    navMenu.classList.toggle("active");

})
