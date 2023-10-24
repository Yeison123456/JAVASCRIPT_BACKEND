const deg=6;

/*Guarda en una constante el elemento llamado por un clase del HTML */
const hora=document.querySelector(".hora");
const minuto=document.querySelector(".minuto");
const segundo=document.querySelector(".segundo");

setInterval(() =>{

    /*Guarda en un varibale la fecha y la hora actual del sistema */
    let tiempo= new Date();

    /*Guarda la hora, minutos y segundos de la hora actual y la multiplica por los grados a rotar */
    let hr=tiempo.getHours() *30;
    let min=tiempo.getMinutes() *deg;
    let seg=tiempo.getSeconds() *deg;

    console.log(hr)
    console.log(min)
    // console.log(min)
    // console.log(seg)

    /*Para modificar el css */
    hora.style.transform= `rotate(${(hr)+(min/12)}deg)`
    minuto.style.transform= `rotate(${min}deg)`
    segundo.style.transform= `rotate(${seg}deg)`
});


