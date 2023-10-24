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

function Time(){
    /*Guardara la fecha actual, la hora, los minutos y los segundos  */
    let tiempo = new Date();
    console.log(tiempo)

    /*Guarda la hora, los minutos y los segundos */
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();   

    /*Si en algunos de los 3 el dato es menor a 10, añadira un 0 al lado izquierdo del dato y los guardara, si no no añadira nada */
    hora = hora < 10 ? "0"+ hora: hora;
    minuto = minuto < 10 ? "0"+ minuto: minuto;
    segundo =segundo < 10 ? "0"+segundo:segundo;

    /*Crea una variable y guarda la estructura para la hora */
    let relojD = document.querySelector(".Reloj_analogo");

    /*Verificar si esta en a.m o p.m */
    if(hora==12){
        let pantallaR = hora +":"+minuto+":"+segundo+" p.m.";
        /*En la clase reloj hace un inner join para agregar el contenido que seria la hora */
        relojD.innerHTML = pantallaR;
    } else if(hora==24){
        let pantallaR = hora-12 +":"+minuto+":"+segundo+" a.m.";
        /*En la clase reloj hace un inner join para agregar el contenido que seria la hora */
        relojD.innerHTML = pantallaR;
    } else if (hora<=11){
        let pantallaR = hora +":"+minuto+":"+segundo+" a.m";
        /*En la clase reloj hace un inner join para agregar el contenido que seria la hora */
        relojD.innerHTML = pantallaR;
    } else{
        let pantallaR = hora-12 +":"+minuto+":"+segundo+" p.m.";
        /*En la clase reloj hace un inner join para agregar el contenido que seria la hora */
        relojD.innerHTML = pantallaR;
    }
}
/*Llama a una funcion que se ejecutara cada cierto tiempo */
setInterval(Time,1000);
