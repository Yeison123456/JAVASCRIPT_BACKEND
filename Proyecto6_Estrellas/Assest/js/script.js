const marcoPuntaje= document.querySelector('.puntaje');
let puntajeActual=0;
const puntajeLimite=5;

const htmlMapa= Array.from(Array(puntajeLimite)).map((item, i) =>{
    return `<div class="item item-${i+1}" data-pos="${i+1}"></div>`;
 });


 marcoPuntaje.innerHTML=htmlMapa.join("")

document.querySelectorAll(".item").forEach(item =>{
    item.addEventListener('mouseover', (e)=>{
        console.log("funciona");
        const posicion= item.getAttribute("data-pos");
        console.log(posicion);

        if(puntajeActual === parseInt(posicion)){ 
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris => { 
            if(cuadraditoGris.classList.contains("select")){ 
                cuadraditoGris.classList.remove("select")
            }
        })

        for(let i=1; i<=posicion; i++){
            const cuadradito=document.querySelector(`.item-${i}`);
            if(!cuadradito.classList.contains("select")){
                cuadradito.classList.add("select");
            }
        }

        puntajeActual=parseInt(posicion);
    });

    item.addEventListener("click", (e)=>{
        const posicion=item.getAttribute("data-pos");
        puntajeActual=parseInt(posicion);
        console.log(puntajeActual)
    });

});


// { }