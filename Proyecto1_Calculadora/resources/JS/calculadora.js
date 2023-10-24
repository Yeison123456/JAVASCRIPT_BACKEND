/*Guarda en una constante el elemento llamado por un clase del HTML */
const pantalla= document.querySelector(".pantalla")
const botones= document.querySelectorAll(".boton")

/*Recorre toda la constante botones */
botones.forEach(boton => {
    boton.addEventListener("click", ()=>{

        /*Se guarda el numero que se epresiono */
        const botonOn=boton.textContent;
        
        /*Cuando se presione el boton con el id borrar ejecutara el bloque de codigo*/
        if (boton.id==="borrar"){
            /*Si el contenido de la pantalla es igual a 1 o esta en Error...*/
            if(pantalla.textContent.length===1 || pantalla.textContent==="Error..."){
            pantalla.textContent="0";
            /*Si no, borra de a uno en uno */
            } else {
                pantalla.textContent= pantalla.textContent.slice(0,-1);
            }
            return;
        }

        /*Cuando se presione el boton con el id igual ejecutara el bloque de codigo*/
        if(boton.id==="igual"){
           try{ 
            /*Si el contenido de la pantalla al momento de hacer el split y contar su longitud es diferente a 2, ejecutara el codigo */
            if (pantalla.textContent.includes("/") && pantalla.textContent.split("/").length != 2) {
            pantalla.textContent = "Error...";
            console.log("Entro al error")
            /*Si no se hara el procedimiento con la funcion eval */
            } else{
                console.log("Entro")
                pantalla.textContent= eval(pantalla.textContent);
            }} catch{
                pantalla.textContent= "Error...";
            }
            
            return;
        }

        /*Cuando el contenido de la pantalla este en 0 o en error dejara poner cualquier numero */
        if(pantalla.textContent === "0" || pantalla.textContent=== "Error..."){
            /*Se pondra el numero que presiono */
            pantalla.textContent=botonOn;
        } 
        /*Si no pondra mas numero al lado del que ya esta */
        else {
            pantalla.textContent+=botonOn;
        }

        /*Cuando se presione el boton con el id limpiar cambiara el contenido de la pantalla a 0 */
        if(boton.id==="limpiar"){
            pantalla.textContent="0"
        }

    })
})