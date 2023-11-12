const navegacion = document.querySelector(".menuPrincipal");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");



abrir.addEventListener("click", ()=> { 
    navegacion.classList.add('visible');
});

cerrar.addEventListener("click", () =>{
    navegacion.classList.remove("visible");
})


/*{ }*/