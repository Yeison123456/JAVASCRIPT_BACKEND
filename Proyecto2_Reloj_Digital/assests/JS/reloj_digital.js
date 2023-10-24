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
    let pantallaR = hora +":"+minuto+":"+segundo;
    let relojD = document.querySelector(".reloj");
    /*En la clase reloj hace un inner join para agregar el contenido que seria la hora */
    relojD.innerHTML = pantallaR;
}
/*Llama a una funcion que se ejecutara cada cierto tiempo */
setInterval(Time,1000);