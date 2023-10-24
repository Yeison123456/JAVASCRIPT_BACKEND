var productos=[
    {
        "producto": "Papas",
        "cantidad": 2,
        "precioUnidad": 2000
    }
]
console.log(productos)

let añadir=document.getElementById("añadir")
let eliminar=document.getElementById("eliminar")
let modificar=document.getElementById("modificar")
let comprar=document.getElementById("comprar")

añadir.addEventListener('click', ()=>{
    let nombre=document.getElementById("nombre").value
    let cantidad=document.getElementById("cantidad").value
    let precio=document.getElementById("precio").value

    productos.push({"producto":nombre, "cantidad": cantidad, "precioUnidad": precio})
    console.log(productos)
    alert("Se agrego correctamente")
})

modificar.addEventListener('click', ()=>{
    let nombre=document.getElementById("nombre").value
    let cantidad=document.getElementById("cantidad").value
    let precio=document.getElementById("precio").value

    for (i=0; i<=productos.length; i++) {
        if (productos[i].producto==nombre){
            productos[i].cantidad=cantidad
            productos[i].precio=precio

            alert("Producto modificado correctamente")
        }
        else{
            alert("Producto no encontrado")
        }
    }
    console.log(productos)

})

eliminar.addEventListener('click', ()=>{
    console.log("entro")
    let nombre=document.getElementById("nombre").value

    for (i=0; i<=productos.length; i++) {
        if (productos[i].producto==nombre){
            delete productos[i]

            alert("Producto eliminado correctamente")
        }
        else{
            alert("Producto no encontrado")
        }
    }
    console.log(productos)

})

comprar.addEventListener('click', ()=>{
    let nombre=document.getElementById("nombre").value
    let cantidad=document.getElementById("cantidad").value


    for (i=0; i<=productos.length; i++) {
        if (productos[i].producto==nombre){
            
            let total= cantidad*productos[i].precioUnidad

            alert(`El total a pagar es de: ${total}`)
        }
        else{
            alert("Producto no encontrado")
        }
    }
    console.log(productos)

})


for (i=0; i<=productos.length; i++ ){
    document.write(`<p>${productos[i]["producto"]}</p><br><p>${productos[i]["cantidad"]}<br><p>${productos[i]["precio"]}<br><br>`)
}