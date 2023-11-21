const TiempoLimite='NOV 21 2023 16:15:00 GMT-0500';

function obtenerTiempoFaltante(TiempoLimite){
    let ahora= new Date();
    let tiempoFaltante=(new Date(TiempoLimite) - ahora +1000)/1000;
    let segundosFaltantes=("0"+Math.floor(tiempoFaltante % 60)).slice(-2),
     minutosFaltantes=("0"+Math.floor(tiempoFaltante/ 60 % 60)).slice(-2),
     horasFaltantes=("0"+Math.floor(tiempoFaltante/ 3600 % 24)).slice(-2),
     diasFaltantes=("0"+Math.floor(tiempoFaltante/ (3600 * 24))).slice(-2);

    return {
        diasFaltantes, 
        horasFaltantes, 
        minutosFaltantes, 
        segundosFaltantes,
        tiempoFaltante};

}


function cuentaRegresiva(tiempoFaltante, mensaje){
    const d=document.getElementById("dias");
    const h=document.getElementById("horas");
    const m=document.getElementById("min");
    const s=document.getElementById("seg");

    const tiempoActual= setInterval(()=>{
        let t=obtenerTiempoFaltante(tiempoFaltante);
        d.innerHTML=`${t.diasFaltantes}`
        h.innerHTML=`${t.horasFaltantes}`
        m.innerHTML=`${t.minutosFaltantes}`
        s.innerHTML=`${t.segundosFaltantes}`
    
        if(t.tiempoFaltante<1){
            clearInterval(tiempoActual)
            const me=document.getElementById("mensaje");
            me.innerHTML=mensaje;
            d.innerHTML=`00`
            h.innerHTML=`00`
            m.innerHTML=`00`
            s.innerHTML=`00`
            
            console.log("entro a la condicion");
            
            const play=document.getElementById("play");
            const pause=document.getElementById("pause");
            const santa=document.getElementById("santa");
            santa.classList.add("santa-on");    
            play.style.display="block";
            pause.style.display="block";
            
            const audio=new Audio("../sound/Navidad.mp3")
            play.addEventListener("click", ()=>{
                play.classList.add("play-on");
                pause.classList.add("pause-on");
                console.log("entro a la condicion");
                audio.play()
            });
            pause.addEventListener("click", ()=>{
                play.classList.remove("play-on");
                pause.classList.remove("pause-on");
                console.log("entro a la condicion");
                audio.pause()
            })
        }
    
    },1000)
};

cuentaRegresiva(TiempoLimite, 'Feliz Navidad!!!!')