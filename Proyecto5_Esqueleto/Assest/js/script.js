let esqueleto = 'off';
let esqueletoQuieto= document.getElementById("esqueletoQuieto")
let botonSonido= new Audio("E:/MemoriaYeison/Trimestre IV/JavaScript BackEnd/Proyecto5_Esqueleto/Assest/sound/botonBailar.mp3");
let botonAudio= new Audio("E:/MemoriaYeison/Trimestre IV/JavaScript BackEnd/Proyecto5_Esqueleto/Assest/sound/audio.mp3");


function bailar(){
    if(esqueleto=='off'){
        esqueleto = 'on';
        esqueletoQuieto.classList.add("on");
        console.log('On');
        esqueletoQuieto.addEventListener('click', ()=>{
            botonSonido.play();
            botonAudio.play();
        })
    }  else {
        esqueleto='off';
        esqueletoQuieto.classList.remove("on");
        console.log('Off');
        esqueletoQuieto.addEventListener('click', ()=>{
            botonAudio.pause();
        })
    }
}