const icon__menu = document.querySelector(".icon__menu");
const menu = document.querySelector(".menu");
const show__black = document.querySelector(".show__black");
const icon__movil = document.querySelector(".abrir_cerrar__menu");

icon__movil.addEventListener("click", ()=>{
    menu.classList.toggle("show__icon__menu"),
    show__black.classList.toggle("show__black__dos")
})

icon__menu.addEventListener("click", ()=>{
    menu.classList.toggle("show__menu");
    
})

icon__menu.addEventListener("click", ()=>{
    show__black.classList.toggle("show__black__dos")
    
})


